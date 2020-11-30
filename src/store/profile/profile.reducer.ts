import initialState from '../initialState';
import { ProfileState, TAction } from '../store.types';
import * as profileConstants from './profile.constants';

function getInitialState() {
  return Object.assign({}, initialState.profile);
}

function profileReducer(
  state = getInitialState(),
  action: TAction,
): ProfileState {
  switch (action.type) {
    case profileConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case profileConstants.POST_LOGOUT: {
      return getInitialState();
    }

    case profileConstants.LOGIN_REQUEST: {
      return {
        ...state,
        isLogging: true,
      };
    }
    case profileConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        isLogging: false,
      };
    }
    case profileConstants.LOGIN_FAILURE: {
      return {
        ...state,
        isLogging: false,
      };
    }
    case profileConstants.SIGNUP_REQUEST: {
      return {
        ...state,
        isLogging: true,
      };
    }
    case profileConstants.SIGNUP_SUCCESS: {
      const { userId, clientId, email } = action.payload;

      return {
        ...state,
        isLogging: false,
        userId: userId,
        clientId: clientId,
        client: {
          ...state.client,
          id: action.payload.clientId,
          firstName: '',
          lastName: '',
          email: email,
          phone: '',
          bio: '',
          birthDate: '',
          profilePicture: '',
        },
      };
    }
    case profileConstants.SIGNUP_FAILURE: {
      return {
        ...state,
        isLogging: false,
      };
    }

    case profileConstants.FETCH_PROFILE_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case profileConstants.FETCH_PROFILE_SUCCESS: {
      const { client } = action.payload;
      return {
        ...state,
        isFetching: false,
        client: client,
        clientId: client.id,
      };
    }

    case profileConstants.FETCH_PROFILE_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default:
      return state;
  }
}

export default profileReducer;
