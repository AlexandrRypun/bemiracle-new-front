import { EntityWithTranslations, LANG } from '../types/common';

export const getTranslation = <T>(fieldName: string, entity: EntityWithTranslations): string => {
  const translation = entity.translations.find(({ lang }) => lang === LANG.EN);
  return translation ? translation[fieldName] : '';
};
