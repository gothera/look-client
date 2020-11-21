import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { Category } from '../../../../types';
import AppointmentEntryRow from '../appointment-entry-row/AppointmentEntryRow';
import { styles } from './styles';

interface AppointmentAux {
  artistFullName: string;
  artistPhoto: string;
  category: Category;
  date: string;
  serviceName: string;
}

const DUMMY_APPOINTMENTS: AppointmentAux[] = [
  {
    artistFullName: 'Bogdan Muscalau',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '16 September',
    serviceName: 'Night Makeup',
  },
  {
    artistFullName: 'Andrei Stanila',
    artistPhoto: 'https://imgur.com/Lrb9qjl.png',
    category: Category.Nails,
    date: '10 September',
    serviceName: 'Classic Manicure',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
  {
    artistFullName: 'Elena Georgescu',
    artistPhoto: 'https://imgur.com/nf95KqH.png',
    category: Category.Makeup,
    date: '2 September',
    serviceName: 'Bridal Makeup',
  },
];

interface OwnProps {
  componentId: string;
  scrollY: Animated.Value;
}

const AppointmentsList: React.FC<OwnProps> = ({ componentId, scrollY }) => {
  const renderAppointmentRow = ({
    item,
    index,
  }: {
    item: AppointmentAux;
    index: number;
  }) => {
    return (
      <AppointmentEntryRow
        artistFullName={item.artistFullName}
        artistPhoto={item.artistPhoto}
        category={item.category}
        date={item.date}
        serviceName={item.serviceName}
        showDivider={index !== DUMMY_APPOINTMENTS.length - 1}
        onPress={() => {}} // push appointment screen
      />
    );
  };

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  return (
    <Animated.FlatList
      data={DUMMY_APPOINTMENTS}
      renderItem={renderAppointmentRow}
      style={styles.list}
      contentContainerStyle={styles.containerList}
      onScroll={onScroll}
    />
  );
};

export default AppointmentsList;
