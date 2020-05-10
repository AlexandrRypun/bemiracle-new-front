import React, { useCallback, useState } from 'react';

import './styles.css';

interface Props {
  element: React.ReactElement;
  DDContent: React.ReactElement;
}
const SlideDropdown: React.FC<Props> = ({ element, DDContent }) => {
  const [DDOpened, setDDOpened] = useState<boolean>(false);
  const showHideDD = useCallback((open: boolean) => (): void => setDDOpened(open), [setDDOpened]);
  return (
    <div className="slide-dropdown" onMouseEnter={showHideDD(true)} onMouseLeave={showHideDD(false)}>
      <div className="slide-dropdown-element">{element}</div>
      <div className={`slide-dropdown-content ${DDOpened ? 'show' : ''}`}>{DDContent}</div>
    </div>
  );
};

export default SlideDropdown;
