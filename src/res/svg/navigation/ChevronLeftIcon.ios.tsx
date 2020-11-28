import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const ChevronLeftIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M5.487 8l6.953-6.953a.616.616 0 00-.871-.871L4.181 7.564a.616.616 0 000 .871l7.388 7.388a.616.616 0 00.871-.871L5.487 8z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
});
