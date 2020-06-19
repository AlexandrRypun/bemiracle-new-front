import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { AuthTokens } from '../types/common';
import { User } from '../types/users';

export const setTokens = (tokens: AuthTokens): void => {
  localStorage.setItem('accessToken', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
};

export const cleanAuthTokens = (): void => {
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('accessToken');
};

export const refreshTokens = async (): Promise<boolean> => {
  let redirect = false;
  const oldRefreshToken = localStorage.getItem('refreshToken');

  if (oldRefreshToken) {
    cleanAuthTokens();
    try {
      const response = await axios.put<AuthTokens>(
        `${process.env.REACT_APP_API_URL}/auth/refreshTokens`,
        {},
        {
          headers: { RefreshToken: oldRefreshToken },
        },
      );
      setTokens(response.data);

      return true;
    } catch (e) {
      redirect = true;
    }
  } else {
    redirect = true;
  }
  if (redirect) {
    window.location.replace('/signin');
  }
  return false;
};

export const decodeJWTToken = (token: string): User | null => {
  try {
    return jwtDecode<User>(token);
  } catch (e) {
    return null;
  }
};
