import {
  AppointmentApi,
  CreateAppointment,
  OwnAppointmentsResponse,
} from './api.types';
import { deleteRequest, getRequest, postRequest } from './apiRequest';

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

export const postAppointment = (appointment: CreateAppointment) => {
  const url = `artist/appointment/`;

  return postRequest<AppointmentApi>(url, appointment);
};
