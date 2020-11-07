import { combineReducers } from 'redux';
import profileReducer from './profile/profile.reducer';


export default combineReducers({
  profile: profileReducer,
});
