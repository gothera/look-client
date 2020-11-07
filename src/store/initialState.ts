import { StoreState } from './store.types';
const initialState: StoreState = {
  profile: {
    isLogging: false,
    isFetching: false,
    localProgramEntries: {},
    programEntriesByDate: [],
    isUploadingProfilePicture: false,
    likes: 0,
    appointmentsCount: 0,
    scheduledDates: [],
    rating: 5,
  },
 
};

export default initialState;
