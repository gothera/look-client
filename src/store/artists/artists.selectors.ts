import { createSelector } from 'reselect';
import { Category } from '../../types';
import { StoreState } from '../store.types';

export const selectArtists = (state: StoreState) => state.artists;

export const selectLocalArtists = (state: StoreState) => state.artists.local;

export const selectExploreArtistsMakeup = (state: StoreState) =>
  state.artists.explore.makeup;

export const selectExploreArtistsHair = (state: StoreState) =>
  state.artists.explore.hair;

export const selectExploreArtistsNails = (state: StoreState) =>
  state.artists.explore.nails;

export const selectExploreArtistsEyebrows = (state: StoreState) =>
  state.artists.explore.eyebrows;

export const selectExploreArtistsBodyCare = (state: StoreState) =>
  state.artists.explore.bodyCare;

export const selectExploreArtistsLashes = (state: StoreState) =>
  state.artists.explore.lashes;

export const selectExploreArtistsByCategory = (category: Category) =>
  createSelector(
    [
      selectExploreArtistsMakeup,
      selectExploreArtistsHair,
      selectExploreArtistsNails,
      selectExploreArtistsEyebrows,
      selectExploreArtistsBodyCare,
      selectExploreArtistsLashes,
    ],
    (
      artistsMakeup,
      artistsHair,
      artistsNails,
      artistsEyebrows,
      artistsBodyCare,
      artistsLashes,
    ) => {
      switch (category) {
        case Category.Makeup:
          return artistsMakeup;
        case Category.Nails:
          return artistsNails;
        case Category.Hair:
          return artistsHair;
        case Category.Eyebrows:
          return artistsEyebrows;
        case Category.BodyCare:
          return artistsBodyCare;
        case Category.Lashes:
          return artistsLashes;
      }
    },
  );

export const selectSavedArtistsMakeup = (state: StoreState) =>
  state.artists.saved.makeup;

export const selectSavedArtistsHair = (state: StoreState) =>
  state.artists.saved.hair;

export const selectSavedArtistsNails = (state: StoreState) =>
  state.artists.saved.nails;

export const selectSavedArtistsEyebrows = (state: StoreState) =>
  state.artists.saved.eyebrows;

export const selectSavedArtistsBodyCare = (state: StoreState) =>
  state.artists.saved.bodyCare;

export const selectSavedArtistsLashes = (state: StoreState) =>
  state.artists.saved.lashes;

export const selectSavedArtistsByCategory = (category: Category) =>
  createSelector(
    [
      selectSavedArtistsMakeup,
      selectSavedArtistsHair,
      selectSavedArtistsNails,
      selectSavedArtistsEyebrows,
      selectSavedArtistsBodyCare,
      selectSavedArtistsLashes,
    ],
    (
      artistsMakeup,
      artistsHair,
      artistsNails,
      artistsEyebrows,
      artistsBodyCare,
      artistsLashes,
    ) => {
      switch (category) {
        case Category.Makeup:
          return artistsMakeup;
        case Category.Nails:
          return artistsNails;
        case Category.Hair:
          return artistsHair;
        case Category.Eyebrows:
          return artistsEyebrows;
        case Category.BodyCare:
          return artistsBodyCare;
        case Category.Lashes:
          return artistsLashes;
      }
    },
  );

export const selectArtistById = (artistId: number) =>
  createSelector(
    [selectLocalArtists],
    (localArtists) => localArtists[artistId],
  );
