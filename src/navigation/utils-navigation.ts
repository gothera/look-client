import { AnimationOptions } from 'react-native-navigation';

const SPRING_CONFIG = { mass: 3, damping: 500, stiffness: 200 };

const SET_DURATION = 500;

export interface Config {
  props?: any;
  animations?: AnimationOptions;
  options?: any;
}

export const getConfig = (config?: Config): Config => {
  return {
    props: {},
    animations: {},
    options: {},
    ...(config || {}),
  };
};

export function buildSharedElementAnimationsPost(
  postId: number,
): AnimationOptions {
  return {
    showModal: {
      alpha: {
        from: 0,
        to: 1,
        duration: SET_DURATION,
      },
      sharedElementTransitions: [
        {
          fromId: `post-image-${postId}`,
          toId: `post-image-${postId}-dest`,
          duration: SET_DURATION,
          interpolation: { type: 'spring', ...SPRING_CONFIG },
        },
        // {
        //   fromId: `title${postId}`,
        //   toId: `title${postId}Dest`,
        //   duration: SET_DURATION,
        //   interpolation: { type: 'spring', ...SPRING_CONFIG },
        // },
      ],
    },
    dismissModal: {
      alpha: {
        from: 1,
        to: 0,
        duration: SET_DURATION,
      },
      sharedElementTransitions: [
        {
          fromId: `post-image-${postId}-dest`,
          toId: `post-image-${postId}`,
          duration: SET_DURATION,
          interpolation: { type: 'spring', ...SPRING_CONFIG },
        },
      ],
    },
  };
}
