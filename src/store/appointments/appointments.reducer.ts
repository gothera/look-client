import initialState from '../initialState';
import { AppointmentsState, TAction } from '../store.types';
import { addArrayToDictByProp } from '../../utils/global';
import * as appointmentsConstants from './appointments.constants';
import { INVALIDATE_STORE } from '../profile/profile.constants';
const getInitialState = () => Object.assign({}, initialState.appointments);

const postsReducer = (
  state = getInitialState(),
  action: TAction,
): AppointmentsState => {
  switch (action.type) {
    case INVALIDATE_STORE: {
      return getInitialState();
    }

    case appointmentsConstants.FETCH_OWN_APPOINTMENTS_REQUEST: {
      const { isInitialLoading } = action.payload;
      return {
        ...state,
        own: {
          ...state.own,
          requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
        },
      };
    }

    case appointmentsConstants.FETCH_OWN_APPOINTMENTS_SUCCESS: {
      const { appointments, pageable } = action.payload;
      const appointmentsById = appointments.map(
        (appointment) => appointment.id || -1,
      );
      const isFirstPage = pageable.pageNumber === 0;

      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, appointments),
        },
        own: {
          byId: isFirstPage
            ? appointmentsById
            : [...new Set([...state.own.byId, ...appointmentsById])],
          requestStatus: 'success',
          pageable: {
            last: pageable.last,
            pageNumber: pageable.pageNumber + 1,
          },
        },
      };
    }

    case appointmentsConstants.FETCH_OWN_APPOINTMENTS_FAILURE: {
      return {
        ...state,
        own: {
          ...state.own,
          requestStatus: 'failure',
        },
      };
    }

    case appointmentsConstants.FETCH_APPOINTMENT_ACTION: {
      const { appointment } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [appointment.id]: appointment,
        },
      };
    }

    case appointmentsConstants.CANCEL_APPOINTMENT_ACTION: {
      const { appointmentId } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [appointmentId]: {
            ...state.local[appointmentId],
            cancelled: true,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
