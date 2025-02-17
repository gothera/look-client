import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const SmsIcon = React.memo<SVGProps>((props: SVGProps) => {
  return (
    <Svg
      width={props.width || 26}
      height={props.height || 26}
      viewBox="0 0 40 40
      "
      fill="none" 
    >
      <Circle
        cx={20}
        cy={18}
        r={17}
        stroke={props.fill || '#15B2F7'}
        strokeWidth={2}
      />
      <Path
        d="M26.769 20.929c-.199 0-.406-.064-.605-.109a8.516 8.516 0 01-1.184-.353 1.801 1.801 0 00-2.24.905l-.198.408c-.88-.49-1.688-1.1-2.403-1.812a11.03 11.03 0 01-1.806-2.41l.379-.253a1.81 1.81 0 00.903-2.246 9.386 9.386 0 01-.352-1.187 6.758 6.758 0 01-.108-.616 2.72 2.72 0 00-.94-1.63 2.705 2.705 0 00-1.77-.626h-2.71a2.702 2.702 0 00-2.06.923 2.719 2.719 0 00-.65 2.166 17.23 17.23 0 004.912 10.022A17.142 17.142 0 0025.947 29h.343A2.705 2.705 0 0029 26.273v-2.717a2.723 2.723 0 00-.646-1.715 2.708 2.708 0 00-1.585-.912zm.452 5.435a.91.91 0 01-.654.872.946.946 0 01-.394.034 15.338 15.338 0 01-8.93-4.412 15.418 15.418 0 01-4.357-8.977.988.988 0 01.226-.743.904.904 0 01.677-.308h2.71a.902.902 0 01.903.716c.037.247.082.492.136.734.104.477.243.946.415 1.404l-1.264.589a.902.902 0 00-.526.86c.005.119.033.236.083.344a13.107 13.107 0 006.323 6.341.9.9 0 00.686 0 .903.903 0 00.515-.47l.56-1.269c.467.168.944.307 1.427.417.241.054.485.1.732.136a.903.903 0 01.713.906l.019 2.826z"
        fill={props.fill || '#15B2F7'}
      />
    </Svg>
  );
});