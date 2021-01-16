import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { SHARE_APPS_BY_OPTIONS } from '../../res/constants';
import AppInstalledChecker from '../../services/app-installed/AppInstalledChecker';
import { ShareByAppOption } from '../../types';

export const useAvailableShareOptions = () => {
  const [availableList, setAvailableList] = useState<ShareByAppOption[]>([]);

  useEffect(() => {
    const calculateApps = async (): Promise<ShareByAppOption[]> => {
      const appsList: ShareByAppOption[] = [];

      for (const shareAppOption of SHARE_APPS_BY_OPTIONS) {
        if (Platform.OS === 'android') {
          await AppInstalledChecker.isAppInstalledAndroid(shareAppOption)
            .then((isInstalled) => {
              if (isInstalled.isInstalled) {
                appsList.push(shareAppOption);
              }
            })
            .catch((_) => {
              console.error('android is app installed error');
            });
        } else if (Platform.OS === 'ios') {
          await AppInstalledChecker.isAppInstalledIOS(shareAppOption)
            .then((isInstalled) => {
              if (isInstalled) {
                appsList.push(shareAppOption);
              }
            })
            .catch((_) => {
              console.error('iOS is app installed error');
            });
        }
      }

      return appsList;
    };

    calculateApps()
      .then((appsList) => {
        setAvailableList(appsList);
      })
      .catch(() => {});
  }, []);

  return { availableList };
};
