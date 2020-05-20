import { useCallback, useState } from 'react';
import { AnyObject } from '../types/common';
import axios from '../services/axios';

type Args = {
  endpoint: string;
  initIsFetching?: boolean;
};

const useRequest = ({ endpoint, initIsFetching = false }: Args) => {
  const [isFetching, setIsFetching] = useState<boolean>(initIsFetching);

  const getData = useCallback(
    async <T>(params?: AnyObject, onError?: (e: Error) => void): Promise<T> => {
      setIsFetching(true);
      let data = null;
      try {
        const response = await axios.get(endpoint, { params });
        data = response.data;
      } catch (e) {
        if (onError) {
          onError(e);
        }
      } finally {
        setIsFetching(false);
      }
      return data;
    },
    [endpoint],
  );

  return { isFetching, getData };
};

export default useRequest;
