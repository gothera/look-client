import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArtistEntryStateful from '../../../../components/artist/artist-entry-stateful/ArtistEntryStateful';
import { pushArtistScreen } from '../../../../navigation';
import { fetchSavedCategoryArtists } from '../../../../store/artists/artists.actions';
import { selectSavedArtistsByCategory } from '../../../../store/artists/artists.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import { Category } from '../../../../types';
import SavedArtistsEmptyList from '../saved-artists-empty-list/SavedArtistsEmptyList';

interface OwnProps {
  componentId: string;
  category: Category;
  shouldFetch: boolean;
}

const SavedArtistsList: React.FC<OwnProps> = ({
  componentId,
  category,
  shouldFetch,
}) => {
  const artists = useSelector(selectSavedArtistsByCategory(category));

  const dispatch = useDispatch<AsyncDispatch>();

  const fetchMoreSaved = (isInitialLoading: boolean) => {
    if (
      artists.requestStatus === 'loading' ||
      artists.requestStatus === 'initial-loading' ||
      (artists.pageable?.last && !isInitialLoading)
    )
      return;
    dispatch(
      fetchSavedCategoryArtists(
        category,
        isInitialLoading,
        artists.pageable?.pageNumber || 0,
      ),
    );
  };

  useEffect(() => {
    shouldFetch && fetchMoreSaved(true);
  }, [category, shouldFetch]);

  const renderArtistRow = ({
    item,
    index,
  }: {
    item: number;
    index: number;
  }) => {
    const onArtistPress = () => {
      pushArtistScreen(componentId, { props: { artistId: item } });
    };
    return (
      <ArtistEntryStateful
        artistId={item}
        onPress={onArtistPress}
        showDivider={index != artists.byId.length - 1}
      />
    );
  };

  return (
    <FlatList
      data={artists.byId}
      renderItem={renderArtistRow}
      onEndReached={() => fetchMoreSaved(false)}
      ListEmptyComponent={SavedArtistsEmptyList}
    />
  );
};

export default SavedArtistsList;
