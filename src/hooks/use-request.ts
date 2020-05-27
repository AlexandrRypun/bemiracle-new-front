import { useCallback, useState } from 'react';
import { AnyObject } from '../types/common';
import axios from '../services/axios';

type Args = {
  endpoint: string;
  initIsFetching?: boolean;
};

const useRequest = ({ endpoint, initIsFetching = false }: Args) => {
  const [isFetching, setIsFetching] = useState<boolean>(initIsFetching);

  const processRequest = useCallback(
    async <T>(
      method: 'get' | 'post' | 'patch' | 'delete',
      data: AnyObject,
      config: AnyObject,
      onError?: (e: Error) => void,
    ): Promise<T> => {
      setIsFetching(true);
      let result = null;

      const args: Array<any> = [endpoint];
      if (['post', 'patch'].includes(method)) {
        args.push(data);
      }
      args.push(config);

      try {
        // @ts-ignore
        const response = await axios[method].call(axios, ...args);
        result = response.data;
      } catch (e) {
        if (onError) {
          onError(e);
        }
      } finally {
        setIsFetching(false);
      }
      return result;
    },
    [endpoint],
  );

  const get = useCallback(
    <T>(params: AnyObject = {}, onError?: (e: Error) => void): Promise<T> => {
      return processRequest('get', {}, { params }, onError);
    },
    [endpoint],
  );

  const create = useCallback(
    <T>(params: T, onError?: (e: Error) => void): Promise<T> => {
      return processRequest('post', params, {}, onError);
    },
    [endpoint],
  );

  return { isFetching, get, create };
};

export default useRequest;
