import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const AUX_BOTTOM_SPACE = getBottomSpace() !== 0 ? getBottomSpace() + 10 : 30;

export const STATUS_BAR_HEIGHT = getStatusBarHeight();

export const HEADER_SCREEN_HEIGHT = 60;

export const COLLAPSED_HEADER_HEIGHT = STATUS_BAR_HEIGHT + 35;

export const MODAL_BIG_SNAP_POINT = Dimensions.get('screen').height * 0.6;

export const DIALOG_MODAL_HEIGHT = 180;

export const BOTTOM_SPACE = Platform.OS === 'ios' ? AUX_BOTTOM_SPACE : 24;

export const FOOTER_OPTIONS_HEIGHT = 48 + BOTTOM_SPACE;

export const SEARCH_BAR_HEIGHT = 54;

export const POST_CARD_WIDTH = (Dimensions.get('screen').width - 32) / 2;

export const POST_CARD_HEIGHT = 260;

export const POSTS_LIST_NUM_COLUMNS = 2;

export const BORDER_RADIUS = 12;

export const LINEAR_GRADIENT_TRANSPARENT_COLOR = [
  'rgba(0,0,0,0)',
  'rgba(0,0,0,0)',
  'rgba(0,0,0,0.1)',
  'rgba(0,0,0,0.2)',
  'rgba(0,0,0,0.4)',
  'rgba(0,0,0,0.8)',
];

export const CATEGORIES_GRID_COLUMNS = 3;

export const CATEGORY_CARD_DIAMETER =
  (Dimensions.get('screen').width - 64) / CATEGORIES_GRID_COLUMNS;

export const ANIMATED_HEADER_CIRCLE_BUTTON_SIZE = 34;

export const POST_MODAL_IMAGE_HEIGHT = Dimensions.get('screen').height * 0.42;

export const POST_MODAL_IMAGE_OPACITY_RANGE =
  Platform.OS === 'ios'
    ? POST_MODAL_IMAGE_HEIGHT - STATUS_BAR_HEIGHT * 3
    : POST_MODAL_IMAGE_HEIGHT - 60;

export const ANDROID_TOP_BAR_HEIGHT = 42;

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const BOOKING_HEADER_HEIGHT = Platform.OS === 'ios' ? '20%' : '16%';
