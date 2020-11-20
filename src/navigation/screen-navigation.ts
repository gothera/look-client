import { Navigation } from 'react-native-navigation';
import { color } from '../theme';
import {
  AUTH_SCREEN,
  EXPLORE_SCREEN,
  HOME_SCREEN,
  SAVES_SCREEN,
} from './screen-constants';
import { Config, getConfig } from './utils-navigation';

export const setHomeRoot = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            animate: true,
            titleDisplayMode: 'alwaysHide',
            elevation: 30,
            backgroundColor: color.background,
            // drawBehind: true,
            tabsAttachMode: 'onSwitchToTab',
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: EXPLORE_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/explore.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.brand,
                  text: 'Explore',
                  textColor: color.muted,
                  selectedTextColor: color.textPrimary,
                  fontFamily: 'Gilroy-Medium',
                  fontSize: 10,
                  iconInsets: { bottom: 3 },
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: SAVES_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/heart.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.brand,
                  text: 'Saves',
                  textColor: color.muted,
                  selectedTextColor: color.textPrimary,
                  fontFamily: 'Gilroy-Medium',
                  fontSize: 10,
                  iconInsets: { bottom: 3 },
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/lips.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.brand,
                  // text: 'Appointments',
                  // textColor: color.background,
                  // selectedTextColor: color.textPrimary,
                  // fontFamily: 'Gilroy-Medium',
                  // fontSize: 10,
                  // iconInsets: { bottom: 3 },
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },{
            stack: {
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/calendar.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.brand,
                  text: 'Appointments',
                  textColor: color.muted,
                  selectedTextColor: color.textPrimary,
                  fontFamily: 'Gilroy-Medium',
                  fontSize: 10,
                  iconInsets: { bottom: 3 },
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/person.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.brand,
                  text: 'Profile',
                  textColor: color.muted,
                  selectedTextColor: color.textPrimary,
                  fontFamily: 'Gilroy-Medium',
                  fontSize: 10,
                  iconInsets: { bottom: 3 },
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const pushAuthScreen = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: AUTH_SCREEN,
              name: AUTH_SCREEN,
              passProps: { ...config.props },
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
          statusBar: {
            style: 'light',
            backgroundColor: 'white',
            drawBehind: true,
          },
          animations: {
            ...config.animations,
          },
        },
      },
    },
  });
};
