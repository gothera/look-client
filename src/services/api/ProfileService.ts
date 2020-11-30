import { AxiosRequestConfig } from 'axios';
import { Client } from '../../types';
import { getRequest } from './apiRequest';

export const getProfile = (token?: string): Promise<Client> => {
  const url = `client/current/`;

  const extraConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return getRequest<Client>(url, { ...(token && extraConfig) });
};
