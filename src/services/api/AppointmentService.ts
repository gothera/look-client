import { OwnAppointmentsResponse } from './api.types';
import { getRequest } from './apiRequest';

export const getOwnAppointments = (
  nextPage: number,
): Promise<OwnAppointmentsResponse> => {
  const url = `client/appointments?page=${nextPage}`;
  return getRequest<OwnAppointmentsResponse>(url);
};
