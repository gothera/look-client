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
      return {
        ...state,
        isLogging: false,
        email: action.payload.email,
        userId: action.payload.userId,
        artistId: action.payload.artistId,
      };
    }
    case profileConstants.SIGNUP_FAILURE: {
      return {
        ...state,
        isLogging: false,
      };
    }
  

    default:
      return state;
  }
}

export default profileReducer;
