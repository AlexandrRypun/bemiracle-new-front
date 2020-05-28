import React, { useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as EN } from '../../../../assets/images/en.svg';
import { ReactComponent as UA } from '../../../../assets/images/ua.svg';
import { ReactComponent as RU } from '../../../../assets/images/ru.svg';
import SlideDropdown from '../../../slide-dropdown';
import { BrowserContext } from '../../../../contexts/browser';
import { LANG } from '../../../../types/common';

import './styles.css';

const LANG_NAMES = {
  [LANG.EN]: 'English',
  [LANG.UA]: 'Українська',
  [LANG.RU]: 'Русский',
};
const LANG_FLAGS = {
  [LANG.EN]: EN,
  [LANG.UA]: UA,
  [LANG.RU]: RU,
};

const LanguageDropdown: React.FC = () => {
  const { isMobile } = useContext(BrowserContext);
  const [closeTrigger, toggleCloseTrigger] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const element = useMemo(() => {
    // @ts-ignore
    const langName = LANG_NAMES[i18n.language];
    // @ts-ignore
    const Flag = LANG_FLAGS[i18n.language];
    return (
      <span className={`language ${isMobile ? '' : 'withArrow'}`}>
        <Flag />
        {!isMobile && langName}
      </span>
    );
  }, [i18n.language, isMobile]);

  const content = useMemo(() => {
    const options: JSX.Element[] = [];
    Object.values(LANG).forEach(lang => {
      if (lang !== i18n.language) {
        const Flag = LANG_FLAGS[lang];
        options.push(
          <li
            key={lang}
            onClick={(): void => {
              i18n.changeLanguage(lang);
              localStorage.setItem('lang', lang);
              toggleCloseTrigger(!closeTrigger);
            }}
          >
            <span className="language">
              {<Flag />}
              {LANG_NAMES[lang]}
            </span>
          </li>,
        );
      }
    });
    return <ul>{options.map(option => option)}</ul>;
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [i18n.language]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <SlideDropdown
      element={element}
      DDContent={content}
      DDPositionX={isMobile ? 'right' : 'left'}
      closeTrigger={closeTrigger}
    />
  );
};

export default LanguageDropdown;
