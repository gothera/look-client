import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';
export const HeartIconFilled = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || 19}
      height={16}
      viewBox="0 0 19 16"
      fill="none"
      {...props}
    >
      <Path
        d="M16.929 1.415a4.827 4.827 0 00-6.828 0l-.93.93-.93-.93a4.828 4.828 0 00-6.827 6.827l.93.93 6.828 6.83L16 9.174l.93-.93a4.826 4.826 0 000-6.828l-.001-.001z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
});
