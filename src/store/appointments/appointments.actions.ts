import { Category, Pageable, Appointment } from '../../types';
import { ThunkResult } from '../store.types';
import * as appointmentsConstants from './appointments.constants';
import * as appointmentsTypes from './appointments.types';
import * as AppointmentService from '../../services/api/AppointmentService';
import { OwnAppointmentsResponse, PostApi } from '../../services/api/api.types';

// Fetch Own Appointments

export const fetchOwnAppointmentsRequest = (
  isInitialLoading: boolean,
): appointmentsTypes.FetchOwnAppointmentsRequest => {
  return {
    type: appointmentsConstants.FETCH_OWN_APPOINTMENTS_REQUEST,
    payload: { isInitialLoading },
  };
};

export const fetchOwnAppointmentsFailure = (): appointmentsTypes.FetchOwnAppointmentsFailure => {
  return {
    type: appointmentsConstants.FETCH_OWN_APPOINTMENTS_FAILURE,
  };
};

export const fetchOwnAppointmentsSuccess = (
  appointments: Appointment[],
  pageable: Pageable,
): appointmentsTypes.FetchOwnAppointmentsSuccess => {
  return {
    type: appointmentsConstants.FETCH_OWN_APPOINTMENTS_SUCCESS,
    payload: { pageable, appointments },
  };
};

export const fetchOwnAppointments = (
  isInitialLoading: boolean,
  nextPage: number,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(fetchOwnAppointmentsRequest(isInitialLoading));

    return AppointmentService.getOwnAppointments(nextPage)
      .then((response: OwnAppointmentsResponse) => {
        const appointments = response.content.map(
          (appointment): Appointment => {
            return {
              ...appointment,
              requestStatus: undefined,
            };
          },
        );
        const pageable: Pageable = {
          pageNumber: response.number,
          last: response.last,
        };
        dispatch(fetchOwnAppointmentsSuccess(appointments, pageable));
      })
      .catch(() => {
        dispatch(fetchOwnAppointmentsFailure());
      });
  };
};
