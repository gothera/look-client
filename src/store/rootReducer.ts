import { combineReducers } from 'redux';
import artistsReducer from './artists/artists.reducer';
import postsReducer from './posts/posts.reducer';
import profileReducer from './profile/profile.reducer';
import appointmentsReducer from './appointments/appointments.reducer';

export default combineReducers({
  profile: profileReducer,
  artists: artistsReducer,
  posts: postsReducer,
  appointments: appointmentsReducer,
});
