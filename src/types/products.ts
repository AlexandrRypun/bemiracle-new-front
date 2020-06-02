import { EntityWithTranslations, LANG, Translation } from './common';
import { Category } from './categories';

export interface ProductImage {
  id: number;
  name: string;
  title: string;
  url: string;
  productId: number;
}

export interface ProductTranslation extends Translation {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  ingredients: string;
}

export interface Product extends EntityWithTranslations {
  id: number;
  price: number;
  oldPrice: number | null;
  categoryId: number;
  inStock: number;
  images: ProductImage[];
  translations: ProductTranslation[];
  category: Category;
}

export enum IMG_SIZE {
  ORIGIN = 'origin',
  TEASER = 'teaser',
  THUMBNAIL = 'thumbnail',
}
