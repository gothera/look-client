import { StoreState } from './store.types';

const initialState: StoreState = {
  profile: {
    isLogging: false,
    isFetching: false,
    token: undefined,
  },
  artists: {
    local: {},
    makeup: {
      byId: [],
    },
    nails: {
      byId: [],
    },
    hair: {
      byId: [],
    },
    eyebrows: {
      byId: [],
    },
    bodyCare: {
      byId: [],
    },
    lashes: {
      byId: [],
    },
  },
};

export default initialState;
