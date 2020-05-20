import { EntityWithTranslations, LANG } from './common';

export interface CategoryTranslation {
  id: number;
  lang: LANG;
  name: string;
}

export interface Category extends EntityWithTranslations {
  id: number;
  translations: CategoryTranslation[];
}
