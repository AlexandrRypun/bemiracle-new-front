import React from 'react';
import SlideDropdown from '../../../slide-dropdown';

import './styles.css';

const LanguageDropdown: React.FC<React.ComponentProps<any>> = () => {
  const element = (
    <span className="language selected">
      <img src={require('../../../../assets/images/en.png')} />
      English
    </span>
  );
  const content = (
    <ul>
      <li>
        <span className="language">
          <img src={require('../../../../assets/images/it.png')} />
          Italiano
        </span>
      </li>
    </ul>
  );
  return <SlideDropdown element={element} DDContent={content} />;
};

export default LanguageDropdown;
