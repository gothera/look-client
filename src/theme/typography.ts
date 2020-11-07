import { TextStyle } from 'react-native';
import designSystemTypography from './designsystem-typography';

export const font = {
  thin: {
    fontFamily: 'Gilroy-Thin',
  } as TextStyle,
  thinItalic: {
    fontFamily: 'Gilroy-ThinItalic',
  } as TextStyle,
  regular: {
    fontFamily: 'Gilroy-Regular',
  } as TextStyle,
  regularItalic: {
    fontFamily: 'Gilroy-RegularItalic',
  } as TextStyle,
  medium: {
    fontFamily: 'Gilroy-Medium',
  } as TextStyle,
  mediumItalic: {
    fontFamily: 'Gilroy-MediumItalic',
  } as TextStyle,
  semiBold: {
    fontFamily: 'Gilroy-SemiBold',
  } as TextStyle,
  semiBoldItalic: {
    fontFamily: 'Gilroy-SemiBoldItalic',
  } as TextStyle,
  bold: {
    fontFamily: 'Gilroy-Bold',
  } as TextStyle,
  boldItalic: {
    fontFamily: 'Gilroy-BoldItalic',
  } as TextStyle,
  black: {
    fontFamily: 'Gilroy-Black',
  } as TextStyle,
  blackItalic: {
    fontFamily: 'Gilroy-BlackItalic',
  } as TextStyle,
};

export const typography = {
  ...designSystemTypography,

};
