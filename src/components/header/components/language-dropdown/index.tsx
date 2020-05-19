import React, { useContext } from 'react';

import { ReactComponent as EN } from '../../../../assets/images/en.svg';
import { ReactComponent as IT } from '../../../../assets/images/it.svg';
import SlideDropdown from '../../../slide-dropdown';
import { BrowserContext } from '../../../../contexts/browser';

import './styles.css';

const LanguageDropdown: React.FC<React.ComponentProps<any>> = () => {
  const { isMobile } = useContext(BrowserContext);
  const element = (
    <span className={`language ${isMobile ? '' : 'withArrow'}`}>
      <EN />
      {!isMobile && 'English'}
    </span>
  );
  const content = (
    <ul>
      <li>
        <span className="language">
          <IT />
          Italiano
        </span>
      </li>
    </ul>
  );
  return <SlideDropdown element={element} DDContent={content} DDPositionX={isMobile ? 'right' : 'left'} />;
};

export default LanguageDropdown;
