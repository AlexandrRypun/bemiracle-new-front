export type AnyObject = {
  [name: string]: any;
};

export type GetManyResponse<T> = {
  data: T[];
  total: number;
};

export enum LANG {
  EN = 'en',
  UA = 'ua',
  RU = 'ru',
}

export interface EntityWithTranslations {
  translations: AnyObject[];
}
