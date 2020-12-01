import { createSelector } from 'reselect';
import { Category } from '../../types';
import { StoreState } from '../store.types';

export const selectArtists = (state: StoreState) => state.artists;

export const selectLocalArtists = (state: StoreState) => state.artists.local;

export const selectArtistsMakeup = (state: StoreState) => state.artists.makeup;

export const selectArtistsHair = (state: StoreState) => state.artists.hair;

export const selectArtistsNails = (state: StoreState) => state.artists.nails;

export const selectArtistsEyebrows = (state: StoreState) =>
  state.artists.eyebrows;

export const selectArtistsBodyCare = (state: StoreState) =>
  state.artists.bodyCare;

export const selectArtistsLashes = (state: StoreState) => state.artists.lashes;

export const selectExploreArtistsByCategory = (category: Category) =>
  createSelector(
    [
      selectArtistsMakeup,
      selectArtistsHair,
      selectArtistsNails,
      selectArtistsEyebrows,
      selectArtistsBodyCare,
      selectArtistsLashes,
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
