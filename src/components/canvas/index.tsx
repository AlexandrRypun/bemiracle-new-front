import React, { useEffect, useState } from 'react';

import './styles.css';

interface Props {
  opened: boolean;
}

const Canvas: React.FC<React.PropsWithChildren<Props>> = ({ children, opened = false }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [openedClass, setOpenedClass] = useState<boolean>(false);
  useEffect(() => {
    if (opened) {
      setIsShown(true);
      setTimeout(() => setOpenedClass(true), 0);
    } else {
      setOpenedClass(false);
      setTimeout(() => setIsShown(false), 400);
    }
  }, [opened]);
  return isShown ? (
    <div>
      <div className="canvas-overlay" />
      <div className={`canvas-content ${openedClass ? 'opened' : ''}`}>{children}</div>
    </div>
  ) : null;
};

export default Canvas;
