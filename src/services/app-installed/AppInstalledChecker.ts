import { Linking } from 'react-native';
import Share, { ShareSingleReturn } from 'react-native-share';
import { SHARE_APPS } from '../../res/constants/share-apps';
import { ShareByAppOption } from '../../types';

class AppInstalledChecker {
  private static instance: AppInstalledChecker;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public static getInstance = (): AppInstalledChecker => {
    if (!AppInstalledChecker.instance) {
      AppInstalledChecker.instance = new AppInstalledChecker();
    }
    return AppInstalledChecker.instance;
  };

  // Android

  private checkPackageName = (
    packageName: string,
  ): Promise<ShareSingleReturn> => {
    return new Promise((resolve, reject) => {
      Share.isPackageInstalled(packageName)
        .then((isInstalled) => {
          resolve(isInstalled);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  public isAppInstalledAndroid = (shareByOption: ShareByAppOption) => {
    const appPackageData = SHARE_APPS[shareByOption];
    return this.checkPackageName(appPackageData.packageName);
  };

  // iOS

  private checkUrlScheme = (
    urlScheme: string,
    urlParams: string,
  ): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      Linking.canOpenURL(urlScheme + '://' + urlParams)
        .then((isInstalled) => {
          resolve(isInstalled);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  public isAppInstalledIOS = (shareByOption: ShareByAppOption) => {
    const appPackageData = SHARE_APPS[shareByOption];
    return this.checkUrlScheme(
      appPackageData.urlScheme,
      appPackageData.urlParams,
    );
  };
}

export default AppInstalledChecker.getInstance();
