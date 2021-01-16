import { Platform } from 'react-native';

export const SHARE_APPS_BY_OPTIONS = ['whatsapp', 'instagram'] as const;

export const SMS_SCHEME_DIVIDER = Platform.OS === 'ios' ? '&' : '?';
