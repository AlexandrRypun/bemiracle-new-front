import React from 'react';

import loader from '../../assets/images/loader.gif';
import './styles.css';

type Props = {
  isLoading: boolean;
  showChildren?: boolean;
};
const Loader: React.FC<React.PropsWithChildren<Props>> = ({ isLoading, children = null, showChildren = false }) => {
  return (
    <>
      {isLoading && (
        <div className="loader-overlay">
          <img src={loader} alt="Loading..." />
        </div>
      )}
      {(!isLoading || showChildren) && children}
    </>
  );
};

export default Loader;
