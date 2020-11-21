import React from 'react';
import { View, FlatList } from 'react-native';
import { Category } from '../../../types';
import PostCard from '../../post/post-card/PostCard';
import { styles } from './styles';

interface PostAux {
  photo: string;
  artistFullName: string;
  artistPhoto: string;
  artistCategory: Category;
}

const DUMMY_POSTS: PostAux[] = [
  {
    photo:
      'https://emauta.beautyclasses.ro/wp-content/uploads/2018/03/Ema-Uta.jpg',
    artistFullName: 'Ema Uta',
    artistPhoto:
      'https://1.bp.blogspot.com/-4W8VShiMuiY/XWAMQgI495I/AAAAAAAAio0/e5sHkEGSAKs2tOagU7leTzWBbRl8QwokwCLcBGAs/s1600/ema%2Buta%2Bbiografie%2Bde%2Bstilista%2Btalentata.jpg',
    artistCategory: Category.Makeup,
  },
  {
    photo:
      'https://i.pinimg.com/originals/d2/f5/9c/d2f59ccedd6b37082e6c2aac9d353df6.jpg',
    artistFullName: 'Bogdan Muscalau',
    artistPhoto:
      'https://1.bp.blogspot.com/-4W8VShiMuiY/XWAMQgI495I/AAAAAAAAio0/e5sHkEGSAKs2tOagU7leTzWBbRl8QwokwCLcBGAs/s1600/ema%2Buta%2Bbiografie%2Bde%2Bstilista%2Btalentata.jpg',
    artistCategory: Category.Makeup,
  },
  {
    photo:
      'https://ea.md/wp-content/uploads/2019/09/66112478_503480507122611_2278682628086290503_n.jpg',
    artistFullName: 'Andrei Stanila',
    artistPhoto:
      'https://1.bp.blogspot.com/-4W8VShiMuiY/XWAMQgI495I/AAAAAAAAio0/e5sHkEGSAKs2tOagU7leTzWBbRl8QwokwCLcBGAs/s1600/ema%2Buta%2Bbiografie%2Bde%2Bstilista%2Btalentata.jpg',
    artistCategory: Category.Makeup,
  },
  {
    photo: 'https://imgur.com/Lrb9qjl.png',
    artistFullName: 'Andrei Stanila',
    artistPhoto: 'https://imgur.com/Lrb9qjl.png',
    artistCategory: Category.Makeup,
  },
  {
    photo: 'https://imgur.com/nf95KqH.png',
    artistFullName: 'Andrei Stanila',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    artistCategory: Category.Makeup,
  },
];

interface OwnProps {
  componentId: string;
}

const PostsColumnList: React.FC<OwnProps> = ({ componentId }) => {
  const renderPostCard = ({
    item,
    index,
  }: {
    item: PostAux;
    index: number;
  }) => {
    return (
      <View style={styles.postContainer}>
        <PostCard
          photo={item.photo}
          artistFullName={item.artistFullName}
          artistPhoto={item.artistPhoto}
          category={item.artistCategory}
          style={
            index % 2 === 0
              ? styles.firstColumnPostContainer
              : styles.secondColumnPostContainer
          }
        />
      </View>
    );
  };

  return (
    <FlatList data={DUMMY_POSTS} renderItem={renderPostCard} numColumns={2} />
  );
};

export default PostsColumnList;
