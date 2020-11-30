import { AxiosRequestConfig } from 'axios';
import { getRequest } from './apiRequest';

export const getProfile = (token?: string): Promise<any> => {
  const url = `client/current/`;

  const extraConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return getRequest<any>(url, { ...(token && extraConfig) });
};
