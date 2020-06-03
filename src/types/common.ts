export type AnyObject = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [name: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
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

export interface Translation extends AnyObject {
  lang: LANG;
}

export interface EntityWithTranslations {
  translations: Array<Translation>;
}

export interface Breadcrumb {
  label: string;
  to?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
