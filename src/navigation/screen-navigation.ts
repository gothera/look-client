import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import strings from '../res/strings/strings';
import { color } from '../theme';
import {
  APPOINTMENTS_SCREEN,
  ARTIST_SCREEN,
  AUTH_SCREEN,
  EXPLORE_CATEGORY_SCREEN,
  EXPLORE_SCREEN,
  FINISH_SIGN_UP_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
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
            titleDisplayMode: 'alwaysShow',
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
          // {
          //   stack: {
          //     children: [
          //       {
          //         component: {
          //           name: HOME_SCREEN,
          //         },
          //       },
          //     ],
          //     options: {
          //       bottomTab: {
          //         icon: require('../res/images/bottom-tabs/lips.png'),
          //         iconColor: color.muted,
          //         selectedIconColor: color.brand,
          //         // text: 'Appointments',
          //         // textColor: color.background,
          //         // selectedTextColor: color.textPrimary,
          //         // fontFamily: 'Gilroy-Medium',
          //         // fontSize: 10,
          //         // iconInsets: { bottom: 3 },
          //       },
          //       topBar: {
          //         visible: false,
          //         drawBehind: true,
          //       },
          //     },
          //   },
          // },
          {
            stack: {
              children: [
                {
                  component: {
                    name: APPOINTMENTS_SCREEN,
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
                    name: PROFILE_SCREEN,
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

/**
 * Pushed on top of a pageSheet, will be showed as a modal
 * @param componentId
 * @param pushConfig
 */
export const pushFinishSignUpScreen = (
  componentId: string,
  pushConfig?: Config,
) => {
  const config = getConfig(pushConfig);

  Navigation.push(componentId, {
    component: {
      name: FINISH_SIGN_UP_SCREEN,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: color.background,
        },
        topBar: {
          title: {
            text: strings.screen.finishSignUp.title,
            fontFamily: 'Gilroy-SemiBold',
          },
          backButton: {
            showTitle: false,
            icon: require('../res/images/icons/chevron-left-icon.png'),
            color: color.textPrimary,
          },
        },
      },
    },
  });
};

export const pushExploreCategoryScreen = (
  componentId: string,
  pushConfig?: Config,
) => {
  const config = getConfig(pushConfig);

  Navigation.push(componentId, {
    component: {
      name: EXPLORE_CATEGORY_SCREEN,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: color.background,
        },
      },
    },
  });
};

export const pushArtistScreen = (componentId: string, pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.push(componentId, {
    component: {
      name: ARTIST_SCREEN,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: color.background,
        },
        ...Platform.select({
          android: {
            topBar: {
              visible: true,
              backButton: {
                showTitle: false,
                icon: require('../res/images/icons/chevron-left-icon.png'),
                color: color.textPrimary,
              },
            },
          },
        }),
        bottomTabs: {
          visible: false,
        },
      },
    },
  });
};
