import React from 'react';

const initialValue = {
  isMobile: false,
};
interface ContextProps {
  isMobile: boolean;
}
export const BrowserContext = React.createContext<ContextProps>(initialValue);

const BrowserProvider: React.FC<React.PropsWithChildren<React.ReactNode>> = ({ children }) => {
  const { innerWidth } = window;
  return <BrowserContext.Provider value={{ isMobile: innerWidth < 992 }}>{children}</BrowserContext.Provider>;
};

export default BrowserProvider;
