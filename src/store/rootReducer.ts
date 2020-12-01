import { combineReducers } from 'redux';
import artistsReducer from './artists/artists.reducer';
import profileReducer from './profile/profile.reducer';

export default combineReducers({
  profile: profileReducer,
  artists: artistsReducer,
});
