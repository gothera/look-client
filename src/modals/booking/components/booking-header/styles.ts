import { StyleSheet, ViewStyle } from 'react-native';
import {
  BOOKING_HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
} from '../../../../res/constants';
import { spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    height: BOOKING_HEADER_HEIGHT,
    backgroundColor: 'red',
  },
  contentContainer: {
    marginTop: STATUS_BAR_HEIGHT,
    paddingHorizontal: spacing.base,
    flex: 1,
  },
});
