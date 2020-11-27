import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const CloseIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={16} height={15.999} viewBox="0 0 16 15.999" {...props}>
      <Path
        d="M14 0L8 6 2 0 0 2l6 6-6 6 2 2 6-6 6 6 2-2-6-6 6-6z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
});
