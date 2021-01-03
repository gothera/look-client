import { createSelector } from 'reselect';
import { StoreState } from '../store.types';

export const selectLocalAppointments = (state: StoreState) =>
  state.appointments.local;

export const selectAppointmentById = (appointmentId: number) =>
  createSelector(
    [selectLocalAppointments],
    (localAppointments) => localAppointments[appointmentId],
  );

export const selectOwnAppointments = (state: StoreState) =>
  state.appointments.own;

export const selectAppointments = () =>
  createSelector([selectOwnAppointments], (own) => {
    return own;
  });
