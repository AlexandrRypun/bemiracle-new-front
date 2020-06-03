import React, { useMemo, useState } from 'react';
import { User } from '../../types/users';
import { decodeJWTToken } from '../../services/auth';

type ContextProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};
const initialValue = {
  user: null,
  setUser: (): void => {},
};

export const UserContext = React.createContext<ContextProps>(initialValue);

const UserProvider: React.FC<React.PropsWithChildren<React.ReactNode>> = ({ children }) => {
  const currentUser = useMemo((): User | null => {
    const token = localStorage.getItem('accessToken');
    return token ? decodeJWTToken(token) : null;
  }, []);
  const [user, setUser] = useState<User | null>(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
