import { createEntitiesDataStore } from '../utils/store.utils';
import { StoreState } from './store.types';

const initialState: StoreState = {
  profile: {
    isLogging: false,
    isFetching: false,
    token: undefined,
  },
  artists: {
    local: {},
    explore: {
      ...createEntitiesDataStore()
    },
    saved: {
      ...createEntitiesDataStore()
    }
  },
  posts: {
    local: {},
    saved: {
      ...createEntitiesDataStore()
    }
  },
};

export default initialState;
