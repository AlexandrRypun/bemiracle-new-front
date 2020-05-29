import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AnyObject, EntityWithTranslations, LANG, Translation } from '../types/common';

const findTranslation = <T extends Translation>(entity: EntityWithTranslations, currentLang: LANG): T => {
  const translation = entity.translations.find(({ lang }) => lang === currentLang);
  return (translation || entity.translations.find(({ lang }) => lang === LANG.UA)) as T;
};

export default function useEntityTranslation<T extends Translation>(entity: EntityWithTranslations): T;
export default function useEntityTranslation<T extends Translation>(entity: null): {};
export default function useEntityTranslation<T extends Translation>(entity: EntityWithTranslations | null): AnyObject;

export default function useEntityTranslation<T extends Translation>(entity: EntityWithTranslations | null): T | {} {
  const { i18n } = useTranslation();

  return useMemo(() => {
    if (entity) {
      return findTranslation(entity, i18n.language as LANG);
    }
    return {};
  }, [entity, i18n.language]);
}

export const useEntitiesTranslations = <K extends EntityWithTranslations, T extends Translation>(
  entities: K[],
): Array<K & { currentTranslation: T }> => {
  const { i18n } = useTranslation();

  return useMemo(
    () =>
      entities.map(entity => {
        const currentTranslation = findTranslation<T>(entity, i18n.language as LANG);
        return { ...entity, currentTranslation };
      }),
    [entities, i18n.language],
  );
};
