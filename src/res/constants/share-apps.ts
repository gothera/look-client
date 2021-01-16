import { AppPackageData, ShareByAppOption } from '../../types';

export const SHARE_APPS: Record<ShareByAppOption, AppPackageData> = {
  whatsapp: {
    packageName: 'com.whatsapp',
    urlScheme: 'whatsapp',
    urlParams: 'app',
  },
  instagram: {
    packageName: 'com.instagram.android',
    urlScheme: 'instagram',
    urlParams: 'app',
  },
};
