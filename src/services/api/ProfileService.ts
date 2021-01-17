import { AxiosRequestConfig } from 'axios';
import { Client } from '../../types';
import { getRequest } from './apiRequest';

export const getProfile = (
  token?: string,
  fcmToken?: string,
): Promise<Client> => {
  const url = `client/current/?token=${fcmToken}`;

  const extraConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return getRequest<Client>(url, { ...(token && extraConfig) });
};
