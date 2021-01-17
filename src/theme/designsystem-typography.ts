import { TextStyle } from 'react-native';

const font = {
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

/**
 * Only Design System Typography
 */
const designSystemTypography = {
  /**
   * fontSize = 34
   */
  largeTitle: {
    ...font.medium,
    fontSize: 34,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 34
   */
  largeTitleBold: {
    ...font.bold,
    fontSize: 34,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 28
   */
  title1: {
    ...font.medium,
    fontSize: 28,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 28
   */
  title1Bold: {
    ...font.bold,
    fontSize: 28,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 22
   */
  title2: {
    ...font.medium,
    fontSize: 22,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 22
   */
  title2Bold: {
    ...font.bold,
    fontSize: 22,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 20
   */
  title3: {
    ...font.medium,
    fontSize: 20,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 20
   */
  title3Bold: {
    ...font.bold,
    fontSize: 20,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 20
   */
  title3SemiBold: {
    ...font.semiBold,
    fontSize: 20,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 18
   */
  headline: {
    ...font.medium,
    fontSize: 18,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 18
   */
  headlineSemiBold: {
    ...font.semiBold,
    fontSize: 18,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 18
   */
  headlineBold: {
    ...font.bold,
    fontSize: 18,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 16
   */
  body: {
    ...font.medium,
    fontSize: 16,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 16
   */
  bodySemiBold: {
    ...font.semiBold,
    fontSize: 16,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 16
   */
  bodyRegular: {
    ...font.regular,
    fontSize: 16,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 16
   */
  bodyBold: {
    ...font.bold,
    fontSize: 16,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 14
   */
  subheadline: {
    ...font.medium,
    fontSize: 14,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 14
   */
  subheadlineSemiBold: {
    ...font.semiBold,
    letterSpacing: 0.2,
    fontSize: 14,
  } as TextStyle,

  /**
   * fontSize = 14
   */
  subheadlineRegular: {
    ...font.regular,
    fontSize: 14,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 13
   */
  footnote: {
    ...font.medium,
    fontSize: 13,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 13
   */
  footnoteSemiBold: {
    ...font.semiBold,
    fontSize: 13,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 13
   */
  footnoteRegular: {
    ...font.regular,
    fontSize: 13,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 12
   */
  caption1: {
    ...font.medium,
    fontSize: 12,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 12
   */
  caption1SemiBold: {
    ...font.semiBold,
    fontSize: 12,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 12
   */
  caption1Regular: {
    ...font.regular,
    fontSize: 12,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 12
   */
  caption1Bold: {
    ...font.bold,
    fontSize: 12,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 11
   */
  caption2: {
    ...font.medium,
    fontSize: 11,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 11
   */
  caption2SemiBold: {
    ...font.semiBold,
    fontSize: 11,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 11
   */
  caption2Regular: {
    ...font.regular,
    fontSize: 11,
    letterSpacing: 0.2,
  } as TextStyle,

  /**
   * fontSize = 11
   */
  caption2Bold: {
    ...font.bold,
    fontSize: 11,
    letterSpacing: 0.2,
  } as TextStyle,
};

export default designSystemTypography;
