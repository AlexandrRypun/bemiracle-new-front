import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

import { IMG_SIZE, Product, ProductTranslation } from '../../../types/products';
import { getImgSrc, getMainImgSrc } from '../../../utils/products';
import { CartContext } from '../../../contexts/cart';
import InputNumber from '../../input/number';
import useEntityTranslation from '../../../hooks/use-entity-translation';
import { CategoryTranslation } from '../../../types/categories';

import './styles.css';

enum TAB {
  DESC = 'description',
  INGR = 'ingredients',
}

type Props = {
  product: Product;
};
const ProductView: React.FC<Props> = ({ product }) => {
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TAB>(TAB.DESC);
  const [slider1, setSlider1] = useState<Slider | undefined>();
  const [slider2, setSlider2] = useState<Slider | undefined>();

  const { t } = useTranslation();

  const { alreadyInCart, addToCart } = useContext(CartContext);
  const inCart = useMemo(() => (product ? alreadyInCart(product.id) : 0), [alreadyInCart, product]);
  const maxAddToCart = useMemo(() => {
    const canAdd = product ? product.inStock - inCart : 0;
    return canAdd > 0 ? canAdd : 0;
  }, [product, inCart]);

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

  const translation = useEntityTranslation<ProductTranslation>(product);
  const categoryTranslation = useEntityTranslation<CategoryTranslation>(product ? product.category : null);
  const getTabContent = useCallback((): React.ReactElement => {
    let content = <></>;
    if (product) {
      switch (activeTab) {
        case TAB.DESC:
          content = <div className="product-tab-description">{translation.description}</div>;
          break;
        case TAB.INGR:
          content = <div className="product-tab-ingredients">{translation.ingredients}</div>;
          break;
      }
    }
    return content;
  }, [translation, activeTab, product]);

  const slidesToShow = useMemo(() => {
    const imgQty = product ? product.images.length : 0;
    return imgQty < 2 ? 1 : imgQty === 2 ? 2 : 3;
  }, [product]);

  return (
    <div className="product-view col-md-12">
      <div className="main-contain-summary">
        <div className="contain-left">
          <div className="single-left">
            <div className="product-slider akasha-product-gallery">
              <Slider
                asNavFor={slider2}
                ref={(slider): void => setSlider1(slider || undefined)}
                arrows={false}
                draggable={false}
                fade={true}
                className="flex-viewport"
              >
                {product.images.length > 0 ? (
                  product.images.map(image => <img key={image.id} alt={translation.name} src={getImgSrc(image)} />)
                ) : (
                  <img alt={translation.name} src={getMainImgSrc(product)} />
                )}
              </Slider>
              <Slider
                asNavFor={slider1}
                ref={(slider): void => setSlider2(slider || undefined)}
                vertical={true}
                slidesToShow={slidesToShow}
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
                      slidesToShow,
                      variableWidth: true,
                      prevArrow: <span className="fa fa-angle-left prev" />,
                      nextArrow: <span className="fa fa-angle-right next" />,
                    },
                  },
                ]}
              >
                {product.images.length > 0 ? (
                  product.images.map(image => (
                    <img
                      key={image.id}
                      src={getImgSrc(image, IMG_SIZE.THUMBNAIL)}
                      className="product-slide-icon"
                      alt={translation.name}
                    />
                  ))
                ) : (
                  <img
                    src={getMainImgSrc(product, IMG_SIZE.THUMBNAIL)}
                    className="product-slide-icon"
                    alt={translation.name}
                  />
                )}
              </Slider>
            </div>
          </div>
          <div className="entry-summary">
            <div className="flash">
              <span className="onnew">
                <span className="text">New</span>
              </span>
            </div>
            <h1 className="product-title">{translation.name}</h1>
            <p className="price">${product.price}</p>
            <p className={`stock ${product.inStock > 0 ? 'in' : 'out'}-stock`}>
              {t('product.view.availability')}:&nbsp;
              <span>{t(`product.view.${product.inStock > 0 ? 'available' : 'notAvailable'}`)}</span>
            </p>
            <p className="already-in-cart">
              {t('product.view.inCart')}: <span>{inCart}</span>
            </p>
            <div className="product-short-description">{translation.shortDescription}</div>
            <div className="cart">
              <div className="quantity">
                <InputNumber value={qty} changeHandler={changeQty} />
              </div>
              <button
                className={`product-add-to-cart ${maxAddToCart > 0 ? '' : 'disabled'}`}
                onClick={(): void => {
                  if (maxAddToCart >= qty) {
                    addToCart(product, qty);
                  }
                }}
              >
                {t('product.view.addToCart')}
              </button>
            </div>
            <div className="product_meta">
              <span className="product-category">
                {t('product.view.category')}:&nbsp;
                <Link to={`/category/${product.category.id}`}>{categoryTranslation.name}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-data-tabs">
        <ul className="tabs-list">
          <li className={`tab-title ${activeTab === TAB.DESC ? 'active' : ''}`}>
            <span onClick={(): void => setActiveTab(TAB.DESC)}>{t('product.view.description')}</span>
          </li>
          <li className={`tab-title ${activeTab === TAB.INGR ? 'active' : ''}`}>
            <span onClick={(): void => setActiveTab(TAB.INGR)}>{t('product.view.ingredients')}</span>
          </li>
        </ul>
        <div className="tab-content">{getTabContent()}</div>
      </div>
    </div>
  );
};

export default ProductView;
