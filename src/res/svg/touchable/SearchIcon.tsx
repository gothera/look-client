import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const SearchIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={17.378} height={18} viewBox="0 0 17.378 18" {...props}>
      <Path
        d="M17.116 16.4l-4.286-4.46a7.265 7.265 0 10-5.562 2.6 7.19 7.19 0 004.164-1.315l4.317 4.489a.948.948 0 101.367-1.314zM7.267 1.9a5.372 5.372 0 11-5.371 5.367A5.378 5.378 0 017.267 1.9z"
        fill={props.fill || '#181818'}
      />
    </Svg>
  );
});
