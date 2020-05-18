import { IMG_SIZE, Product, ProductImage } from '../types/products';

const getSizedImgSrc = (imgUrl: string, size: IMG_SIZE = IMG_SIZE.ORIGIN): string => {
  return `${process.env.REACT_APP_API_URL}${imgUrl}?size=${size}`;
};
export const getMainImgSrc = (product: Product, size?: IMG_SIZE): string => {
  const [img] = product.images;
  return getSizedImgSrc(img ? img.url : '/products/image/0', size);
};
export const getImgSrc = (image: ProductImage, size?: IMG_SIZE): string => {
  return getSizedImgSrc(image.url, size);
};
