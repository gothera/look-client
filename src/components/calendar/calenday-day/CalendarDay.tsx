import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { DayComponentProps } from 'react-native-calendars';
import { styles } from './styles';

interface Props {
  dayComponentProps: DayComponentProps;
  isDisabled: boolean;
  onSelectDay: (dayStr: string) => void;
  selectedDay?: string;
}

const CalendarDay: React.FC<Props> = ({
  dayComponentProps,
  isDisabled,
  onSelectDay,
  selectedDay,
}) => {
  const onPress = () => {
    onSelectDay(dayComponentProps.date.dateString);
  };

  const isSelected = selectedDay === dayComponentProps.date.dateString;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.container,
        isDisabled && styles.containerDisabled,
        isSelected && styles.containerSelected,
      ]}
    >
      <Text style={[styles.text, isDisabled && styles.disabledText]}>
        {dayComponentProps.date.day}
      </Text>
    </TouchableOpacity>
  );
};

export default CalendarDay;
