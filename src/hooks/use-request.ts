import { useCallback, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { AnyObject } from '../types/common';
import axios from '../services/axios';

type Args = {
  endpoint: string;
  initIsFetching?: boolean;
};
type Response = {
  isFetching: boolean;
  get: <T>(params?: AnyObject, onError?: (e: Error) => void) => Promise<T>;
  create: <T>(params: T, onError?: (e: Error) => void) => Promise<T>;
};

const useRequest = ({ endpoint, initIsFetching = false }: Args): Response => {
  const [isFetching, setIsFetching] = useState<boolean>(initIsFetching);
  const { t } = useTranslation();

  const processRequest = useCallback(
    async <T>(
      method: 'get' | 'post' | 'patch' | 'delete',
      data: AnyObject,
      config: AxiosRequestConfig,
      onError?: (e: Error) => void,
    ): Promise<T> => {
      setIsFetching(true);
      let result = null;

      const args: Array<string | AxiosRequestConfig | AnyObject> = [endpoint];
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
        } else {
          toast.error(t('common.messages.smthWrong'));
          throw e;
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
    [processRequest],
  );

  const create = useCallback(
    <T>(params: T, onError?: (e: Error) => void): Promise<T> => {
      return processRequest('post', params, {}, onError);
    },
    [processRequest],
  );

  return { isFetching, get, create };
};

export default useRequest;
