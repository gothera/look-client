import { AppointmentApi, OwnAppointmentsResponse } from './api.types';
import { deleteRequest, getRequest } from './apiRequest';

export const getOwnAppointments = (
  nextPage: number,
): Promise<OwnAppointmentsResponse> => {
  const url = `client/appointments?page=${nextPage}`;
  return getRequest<OwnAppointmentsResponse>(url);
};

export const getAppointment = (
  appointmentId: number,
): Promise<AppointmentApi> => {
  const url = `appointment/${appointmentId}`;

  return getRequest<AppointmentApi>(url);
};

export const cancelAppointment = (appointmentId: number): Promise<void> => {
  const url = `artist/appointment/${appointmentId}`;

  return deleteRequest<void>(url);
};
