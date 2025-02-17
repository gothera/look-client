import { DAYS_ABBREVIATION } from '../res/constants';
import { DaysAbbreviation, Category } from '../types/enums';
import { Categories } from '../res/strings/categories';
import {
  makeupServicesSelection,
  lashesServicesSelection,
  eyebrowsServicesSelection,
  nailsServicesSelection,
  bodyCareServicesSelection,
  hairServicesSelection,
} from '../res/constants/pickerItems';
import { color } from '../theme';
import { Artist, Post } from '../types';
import dayjs from 'dayjs';
import { FreeIntervalHoursApi } from '../services/api/api.types';
// todo
export type ContentProp =
  | keyof Artist
  | keyof Post
  | keyof FreeIntervalHoursApi;

/**
 *
 * @param dict initial dictionary
 * @param arr array to be added
 * @param prop key of the dictionary
 */
export const addArrayToDictByProp = <T extends any, A extends any>(
  dict: T,
  arr: A[] = [],
  prop: ContentProp = 'id',
) => {
  arr.forEach((elem) => {
    dict[elem[prop]] = { ...dict[elem[prop]], ...elem };
  });

  return dict;
};

/**
 * Only overwrite common properties, don't delete undefined properties
 * @param dict initial dictionary
 * @param arr array to be added
 * @param prop key of the dictionary
 */
export const addArrayToDictByPropOverwrite = <T extends any, A extends any>(
  dict: T,
  arr: A[] = [],
  prop: ContentProp = 'id',
) => {
  arr.forEach((elem) => {
    dict[elem[prop]] = { ...dict[elem[prop]], ...elem };
  });

  return dict;
};

export const textWithZecimals = (text: string) => {
  if (text.includes('.')) {
    return `${text.split('.')[0]}.${text.split('.')[1][0]}`;
  } else {
    return text + '.0';
  }
};

export const monthNumberToMonthName = (monthNumber: number) => {
  switch (monthNumber) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    default:
      return 'December';
  }
};

export const dayAbbEnumValue = (dayAbb: DaysAbbreviation) => {
  switch (dayAbb) {
    case DaysAbbreviation.Mon:
      return DAYS_ABBREVIATION.MONDAY;
    case DaysAbbreviation.Tue:
      return DAYS_ABBREVIATION.TUESDAY;
    case DaysAbbreviation.Wed:
      return DAYS_ABBREVIATION.WEDNESDAY;
    case DaysAbbreviation.Thu:
      return DAYS_ABBREVIATION.THURSDAY;
    case DaysAbbreviation.Fri:
      return DAYS_ABBREVIATION.FRIDAY;
    case DaysAbbreviation.Sat:
      return DAYS_ABBREVIATION.SATURDAY;
    case DaysAbbreviation.Sun:
      return DAYS_ABBREVIATION.SUNDAY;
  }
};

/**
 * Compare starting = '08:00' with ending = '10:00';
 * @param startingHour
 * @param endingHour
 */
export const isEndingAfterStartingHour = (
  startingHour: string,
  endingHour: string,
) => {
  const hStart = parseInt(startingHour.split(':')[0]);
  const mStart = parseInt(startingHour.split(':')[1]);

  const hEnd = parseInt(endingHour.split(':')[0]);
  const mEnd = parseInt(endingHour.split(':')[1]);

  if (hStart === hEnd) {
    return mEnd > mStart;
  }

  return hEnd > hStart;
};

export const categoryEnumToStr = (category: Category) => {
  switch (category) {
    case Category.Makeup:
      return Categories.makeup;
    case Category.Lashes:
      return Categories.lashes;
    case Category.Hair:
      return Categories.hair;
    case Category.Eyebrows:
      return Categories.eyebrows;
    case Category.Nails:
      return Categories.nails;
    case Category.BodyCare:
      return Categories.bodyCare;
  }
};

export const categoryStrToEnum = (category: string) => {
  if (category === Categories.makeup || category === 'makeup') {
    return Category.Makeup;
  }
  if (category === Categories.lashes || category === 'lashes') {
    return Category.Lashes;
  }
  if (category === Categories.hair || category === 'hair') {
    return Category.Hair;
  }
  if (category === Categories.eyebrows || category === 'eyebrows') {
    return Category.Eyebrows;
  }
  if (category === Categories.nails || category === 'nails') {
    return Category.Nails;
  }
  if (category === Categories.bodyCare || category === 'bodycare') {
    return Category.BodyCare;
  }
  return Category.Makeup;
};

export const getPickerServices = (category: Category) => {
  switch (category) {
    case Category.Makeup: {
      return makeupServicesSelection;
    }
    case Category.Lashes: {
      return lashesServicesSelection;
    }
    case Category.Eyebrows: {
      return eyebrowsServicesSelection;
    }
    case Category.Nails: {
      return nailsServicesSelection;
    }
    case Category.BodyCare: {
      return bodyCareServicesSelection;
    }
    case Category.Hair: {
      return hairServicesSelection;
    }
    default: {
      return makeupServicesSelection;
    }
  }
};

/**
 * @param date
 * ```
 * 2020-11-03 -> 3 November
 * ```
 */
export const dateToDayMonth = (date: string) => {
  const dayNumber = parseInt(date.split('-')[2]);
  const monthName = monthNumberToMonthName(parseInt(date.split('-')[1]));
  return dayNumber + ' ' + monthName;
};

export const getCategoryColor = (category: Category) => {
  switch (category) {
    case Category.Makeup:
      return color.makeup;
    case Category.Lashes:
      return color.lashes;
    case Category.Eyebrows:
      return color.eyebrows;
    case Category.Nails:
      return color.nails;
    case Category.BodyCare:
      return color.bodyCare;
    case Category.Hair:
      return color.hair;
  }
};

export const roundUpNumber = (number: number): string => {
  if (number < 1000) return number.toString();
  else if (number < 10000) return Math.round(number / 100) / 10 + 'K';
  else if (number < 1000000) return Math.floor(number / 1000) + 'K';
  else if (number < 10000000) return Math.floor(number / 100000) / 10 + 'M';
  else return Math.floor(number / 10000000) + 'M';
};

export const hourPrittier = (hour?: string): string => {
  if (!hour) {
    return '';
  }
  return hour.substring(0, hour.lastIndexOf(':'));
};
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const datePrittier = (date: string): string => {
  const day = dayjs(date).day();

  return `${weekdays[day]}, ${dayjs(date).date()} ${monthNumberToMonthName(
    new Date(date).getMonth() + 1,
  )}`;
};

export const minutesToPresentedDuration = (minutes: number): string => {
  return `${minutes >= 60 ? minutes / 60 + 'h' : ''} ${minutes % 60}min`;
};

export const darkenColor = (insertedColor: string, percent: number) => {
  let R = parseInt(insertedColor.substring(1, 3), 16);
  let G = parseInt(insertedColor.substring(3, 5), 16);
  let B = parseInt(insertedColor.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString(), 10);
  G = parseInt(((G * (100 + percent)) / 100).toString(), 10);
  B = parseInt(((B * (100 + percent)) / 100).toString(), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};
