import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { Config, getConfig } from './utils-navigation';
import { color } from '../theme';
import strings from '../res/strings/strings';
import { START_AUTH_MODAL } from './modal-constants';

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
