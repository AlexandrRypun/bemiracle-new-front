import React, { useCallback, useEffect } from 'react';

interface Args {
  ref: React.RefObject<any>;
  onClickInside?: () => void;
  onClickOutside?: () => void;
}
const emptyFunc = (): undefined => undefined;

const useDetectClick = ({ ref, onClickInside = emptyFunc, onClickOutside = emptyFunc }: Args): void => {
  const handleClick = useCallback(
    (event: Event) => {
      if (ref.current && ref.current.contains(event.target)) {
        onClickInside();
      } else {
        onClickOutside();
      }
    },
    [ref, onClickInside, onClickOutside],
  );
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return (): void => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export default useDetectClick;
