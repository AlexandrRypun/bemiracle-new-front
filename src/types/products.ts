import { EntityWithTranslations, LANG } from './common';

export interface ProductImage {
  id: number;
  name: string;
  title: string;
  url: string;
  productId: number;
}

export interface ProductTranslation {
  id: number;
  lang: LANG;
  name: string;
  description: string;
  shortDescription: string;
}

export interface Product extends EntityWithTranslations {
  id: number;
  price: number;
  oldPrice: number | null;
  categoryId: number;
  images: ProductImage[];
  translations: ProductTranslation[];
}

export interface CartProduct extends Product {
  quantity: number;
}

export enum IMG_SIZE {
  ORIGIN = 'origin',
  TEASER = 'teaser',
  THUMBNAIL = 'thumbnail',
}
