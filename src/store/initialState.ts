import { StoreState } from './store.types';

const initialState: StoreState = {
  profile: {
    isLogging: false,
    isFetching: false,
    token: undefined,
  },
};

export default initialState;
