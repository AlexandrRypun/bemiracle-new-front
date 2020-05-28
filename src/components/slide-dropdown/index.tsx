import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

type Props = {
  element: React.ReactElement;
  DDContent: React.ReactElement;
  closeTrigger?: boolean;
  DDPositionX?: 'left' | 'right';
};
const SlideDropdown: React.FC<Props> = ({ element, DDContent, closeTrigger, DDPositionX = 'left' }) => {
  const [DDOpened, setDDOpened] = useState<boolean>(false);
  const showHideDD = useCallback((open: boolean) => (): void => setDDOpened(open), [setDDOpened]);

  useEffect(() => {
    setDDOpened(false);
  }, [closeTrigger, showHideDD]);

  return (
    <div className="slide-dropdown" onMouseEnter={showHideDD(true)} onMouseLeave={showHideDD(false)} onClick={showHideDD(true)}>
      <div className="slide-dropdown-element">{element}</div>
      <div className={`slide-dropdown-content ${DDOpened ? 'show' : ''} ${DDPositionX}`}>{DDContent}</div>
    </div>
  );
};

export default SlideDropdown;
