import React from 'react';
import { View } from 'react-native';
import { CalendarList, DayComponentProps } from 'react-native-calendars';
import { SCREEN_WIDTH } from '../../../res/constants';
import CalendarDay from '../calenday-day/CalendarDay';
import { styles } from './styles';

interface Props {
  freeDays: string[];
  isFetching: boolean;
  onSelectDay: (dayStr: string) => void;
  selectedDay?: string;
}

const HorizontalCalendar: React.FC<Props> = ({
  freeDays,
  isFetching,
  onSelectDay,
  selectedDay,
}) => {
  const renderCalendarDay = (day: DayComponentProps) => {
    const isDisabled = !freeDays.includes(day.date.dateString);
    return (
      <CalendarDay
        dayComponentProps={day}
        isDisabled={isDisabled}
        onSelectDay={onSelectDay}
        selectedDay={selectedDay}
      />
    );
  };

  return (
    <View style={styles.container}>
      {!isFetching && (
        <CalendarList
          horizontal={true}
          pagingEnabled={true}
          calendarWidth={SCREEN_WIDTH}
          onMonthChange={(date) => {
            console.log('on month change', date);
          }}
          dayComponent={renderCalendarDay}
          markedDates={{ selectedDay: { color: 'red' } }} // will re-render days on change
        />
      )}
    </View>
  );
};

export default HorizontalCalendar;
