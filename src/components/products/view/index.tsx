import React, { ChangeEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import useRequest from '../../../hooks/use-request';
import { IMG_SIZE, Product } from '../../../types/products';
import { getTranslation } from '../../../utils/common';
import Loader from '../../loader';
import { getImgSrc } from '../../../utils/products';
import { CartContext } from '../../../contexts/cart';

import './styles.css';

enum TAB {
  DESC = 'description',
  INGR = 'ingredients',
}

type Props = {
  productId: number;
};
const ProductView: React.FC<Props> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TAB>(TAB.DESC);
  const [slider1, setSlider1] = useState<Slider | undefined>();
  const [slider2, setSlider2] = useState<Slider | undefined>();

  const { alreadyInCart, addToCart } = useContext(CartContext);
  const inCart = useMemo(() => (product ? alreadyInCart(product.id) : 0), [alreadyInCart, product]);
  const maxAddToCart = useMemo(() => {
    const canAdd = product ? product.inStock - inCart : 0;
    return canAdd > 0 ? canAdd : 0;
  }, [product, inCart]);

  const endpoint = useMemo(() => `products/${productId}`, [productId]);
  const { isFetching, getData } = useRequest({ endpoint, initIsFetching: true });
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData<Product>();
      setProduct(response);
    };
    fetchData();
  }, []);

  const changeQty = useCallback(
    (newQty: number): void => {
      setQty(
        Number.isNaN(newQty) || newQty < 1 || !product || maxAddToCart < 1
          ? 1
          : newQty > maxAddToCart
          ? maxAddToCart
          : newQty,
      );
    },
    [setQty, product, maxAddToCart],
  );
  const getTabContent = useCallback((): React.ReactElement => {
    let content = <></>;
    if (product) {
      switch (activeTab) {
        case TAB.DESC:
          content = <div className="product-tab-description">{getTranslation('description', product)}</div>;
          break;
        case TAB.INGR:
          content = <div className="product-tab-ingredients">{getTranslation('ingredients', product)}</div>;
          break;
      }
    }
    return content;
  }, [activeTab, product]);

  const prodName = useMemo(() => (product ? getTranslation('name', product) : ''), [product]);

  return (
    <Loader isLoading={isFetching}>
      {product ? (
        <div className="product-view col-md-12">
          <div className="main-contain-summary">
            <div className="contain-left">
              <div className="single-left">
                <div className="product-slider akasha-product-gallery">
                  <Slider
                    asNavFor={slider2}
                    ref={slider => setSlider1(slider || undefined)}
                    arrows={false}
                    draggable={false}
                    fade={true}
                    className="flex-viewport"
                  >
                    {product.images.map(image => (
                      <img key={image.id} alt="prodName" src={getImgSrc(image)} />
                    ))}
                  </Slider>
                  <Slider
                    asNavFor={slider1}
                    ref={slider => setSlider2(slider || undefined)}
                    vertical={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    dots={false}
                    prevArrow={<span className="fa fa-angle-up prev" />}
                    nextArrow={<span className="fa fa-angle-down next" />}
                    focusOnSelect={true}
                    className="flex-control-nav flex-control-thumbs"
                    responsive={[
                      {
                        breakpoint: 992,
                        settings: {
                          vertical: false,
                          slidesToShow: 3,
                          prevArrow: <span className="fa fa-angle-left prev" />,
                          nextArrow: <span className="fa fa-angle-right next" />,
                        },
                      },
                    ]}
                  >
                    {product.images.map(image => (
                      <img
                        key={image.id}
                        src={getImgSrc(image, IMG_SIZE.THUMBNAIL)}
                        className="product-slide-icon"
                        alt={prodName}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="entry-summary">
                <div className="flash">
                  <span className="onnew">
                    <span className="text">New</span>
                  </span>
                </div>
                <h1 className="product-title">{prodName}</h1>
                <p className="price">${product.price}</p>
                <p className={`stock ${product.inStock > 0 ? 'in' : 'out'}-stock`}>
                  Availability: <span>{product.inStock > 0 ? 'In stock' : 'Not available'}</span>
                </p>
                <p className="already-in-cart">
                  Already in cart: <span>{inCart}</span>
                </p>
                <div className="product-short-description">{getTranslation('shortDescription', product)}</div>
                <div className="cart">
                  <div className="quantity">
                    <div className="control">
                      <span className="qty-arrow qty-minus" onClick={(): void => changeQty(qty - 1)} />
                      <input
                        value={qty}
                        className="product-qty"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => changeQty(Number(e.target.value))}
                      />
                      <span className="qty-arrow qty-plus" onClick={(): void => changeQty(qty + 1)} />
                    </div>
                  </div>
                  <button
                    className={`product-add-to-cart ${maxAddToCart > 0 ? '' : 'disabled'}`}
                    onClick={(): void => {
                      if (maxAddToCart >= qty) {
                        addToCart(product, qty);
                      }
                    }}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="product_meta">
                  <span className="product-category">
                    Category:&nbsp;
                    <Link to={`/category/${product.category.id}`}>{getTranslation('name', product.category)}</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-data-tabs">
            <ul className="tabs-list">
              <li className={`tab-title ${activeTab === TAB.DESC ? 'active' : ''}`}>
                <span onClick={(): void => setActiveTab(TAB.DESC)}>Description</span>
              </li>
              <li className={`tab-title ${activeTab === TAB.INGR ? 'active' : ''}`}>
                <span onClick={(): void => setActiveTab(TAB.INGR)}>Ingredients</span>
              </li>
            </ul>
            <div className="tab-content">{getTabContent()}</div>
          </div>
        </div>
      ) : null}
    </Loader>
  );
};

export default ProductView;
