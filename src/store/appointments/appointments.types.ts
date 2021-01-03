import { Appointment, Pageable } from '../../types';
import * as appointmentsConstants from './appointments.constants';

export interface FetchOwnAppointmentsRequest {
  type: typeof appointmentsConstants.FETCH_OWN_APPOINTMENTS_REQUEST;
  payload: {
    isInitialLoading: boolean;
  };
}

export interface FetchOwnAppointmentsFailure {
  type: typeof appointmentsConstants.FETCH_OWN_APPOINTMENTS_FAILURE;
}

export interface FetchOwnAppointmentsSuccess {
  type: typeof appointmentsConstants.FETCH_OWN_APPOINTMENTS_SUCCESS;
  payload: {
    appointments: Appointment[];
    pageable: Pageable;
  };
}

export type AppointmentsActions =
  | FetchOwnAppointmentsRequest
  | FetchOwnAppointmentsFailure
  | FetchOwnAppointmentsSuccess;
