import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { Config, getConfig } from './utils-navigation';
import { color } from '../theme';
import strings from '../res/strings/strings';
import { SEARCH_MODAL, START_AUTH_MODAL } from './modal-constants';

export const showStartAuthModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: START_AUTH_MODAL,
            passProps: { ...config.props },
            options: {
              modalPresentationStyle: OptionsModalPresentationStyle.pageSheet,
              layout: {
                backgroundColor: color.background,
                componentBackgroundColor: 'transparent',
              },
              topBar: {
                title: {
                  text: strings.modal.startAuth.title,
                  fontFamily: 'Gilroy-SemiBold',
                },
              },
            },
          },
        },
      ],
    },
  });
};

export const showSearchModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: SEARCH_MODAL,
            passProps: { ...config.props },
            options: {
              modalPresentationStyle:
                OptionsModalPresentationStyle.overCurrentContext,
              layout: {
                backgroundColor: 'transparent',
                componentBackgroundColor: 'transparent',
              },
              animations: {
                showModal: {
                  alpha: {
                    from: 0,
                    to: 1,
                    duration: 100,
                  },
                },
                dismissModal: {
                  alpha: {
                    from: 1,
                    to: 0,
                    duration: 100,
                  },
                },
              },
              topBar: {
                visible: false,
              },
            },
          },
        },
      ],
    },
  });
};
