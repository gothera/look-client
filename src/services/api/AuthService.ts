import { getRequest, postRequest } from './apiRequest';
import { LoginResponse, SignupResponse } from './api.types';

export const login = (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const url = 'auth/login';
  const data = {
    email: email,
    password: password,
  };
  return postRequest<LoginResponse>(url, data);
};

export const signUp = (
  email: string,
  password: string,
  birthDate: string,
  firstName: string,
  lastName: string,
): Promise<SignupResponse> => {
  const url = 'auth/signup';
  const data = {
    type: 'Client',
    email: email,
    password: password,
    birthDate,
    firstName,
    lastName,
  };
  return postRequest<SignupResponse>(url, data);
};

export const emailExists = (email: string): Promise<boolean> => {
  const url = `client/exists/${email}`;
  return getRequest<boolean>(url);
};
