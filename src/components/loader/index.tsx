import React from 'react';

import loader from '../../assets/images/loader.gif';
import './styles.css';

type Props = {
  isLoading: boolean;
};
const Loader: React.FC<React.PropsWithChildren<Props>> = ({ isLoading, children = null }) => {
  return (
    <>
      {isLoading ? (
        <div className="loader-overlay">
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
