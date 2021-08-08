import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { UIActivityIndicator } from 'react-native-indicators';
import { Category } from '../../../../types';
import { fetchCategoryArtists } from '../../../../store/artists/artists.actions';
import { StoreState } from '../../../../store/store.types';
import { selectExploreArtistsByCategory } from '../../../../store/artists/artists.selectors';
import ArtistEntryStateful from '../../../../components/artist/artist-entry-stateful/ArtistEntryStateful';
import { color } from '../../../../theme';
import { pushArtistScreen } from '../../../../navigation';
import ExploreArtistsEmptyList from '../explore-artists-empty-list/ExploreArtistsEmptyList';

interface OwnProps {
  componentId: string;
  category: Category;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const { category } = ownProps;
  const { byId, requestStatus, pageable } = selectExploreArtistsByCategory(
    category,
  )(state);
  return {
    artistsById: byId,
    requestStatus,
    pageable,
  };
};

const mapDispatchToProps = {
  fetchCategoryArtists,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ExploreArtistsList: React.FC<OwnProps & PropsFromRedux> = ({
  category,
  componentId,
  fetchCategoryArtists,
  artistsById,
  requestStatus,
  pageable,
}) => {
  useEffect(() => {
    fetchCategoryArtists(category, true, 0);
  }, []);

  const renderFooterLoading = () => {
    if (requestStatus === 'loading' && pageable?.last !== false) {
      return <UIActivityIndicator />;
    }
    return null;
  };

  const onEndReached = () => {
    if (
      // requestStatus === undefined ||
      // requestStatus === 'initial-loading' ||
      // requestStatus === 'loading' ||
      pageable === undefined ||
      pageable.last
    )
      return;

    console.log('==== on end reachec====');
    fetchCategoryArtists(category, false, pageable.pageNumber + 1);
  };

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
        showDivider={index !== artistsById.length - 1}
      />
    );
  };

  const renderRefreshControl = (
    <RefreshControl
      tintColor={color.textPrimary}
      colors={['transparent']}
      refreshing={requestStatus === 'initial-loading'}
    />
  );

  return (
    <FlatList
      data={artistsById}
      renderItem={renderArtistRow}
      keyExtractor={(_, index) => `explore-artists-list-${category}-${index}`}
      ListFooterComponent={renderFooterLoading}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshControl={renderRefreshControl}
      ListEmptyComponent={
        requestStatus === 'success' ? <ExploreArtistsEmptyList /> : null
      }
    />
  );
};

export default connector(ExploreArtistsList) as React.FC<OwnProps>;
