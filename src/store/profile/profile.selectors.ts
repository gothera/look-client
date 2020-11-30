import { StoreState } from '../store.types';

export const selectCurrentClient = (state: StoreState) => state.profile.client;

export const selectLatestAppointments = (state: StoreState) =>
  state.profile.client?.latestAppointments || [];
