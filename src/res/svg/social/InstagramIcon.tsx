import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { SVGProps } from '../index';

export const InstagramIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M13 25c6.627 0 12-5.373 12-12S19.627 1 13 1 1 6.373 1 13s5.373 12 12 12z"
        stroke="#D8D8D8"
        strokeWidth={2}
      />
      <Path
        d="M15.3 8h-4.2A3.1 3.1 0 008 11.1v4.2a3.1 3.1 0 003.1 3.1h4.2a3.1 3.1 0 003.1-3.1v-4.2A3.1 3.1 0 0015.3 8zm2.047 7.3a2.051 2.051 0 01-2.047 2.047h-4.2A2.052 2.052 0 019.045 15.3v-4.2A2.05 2.05 0 0111.1 9.045h4.2a2.052 2.052 0 012.047 2.055v4.2z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M13.196 10.508a2.688 2.688 0 100 5.376 2.688 2.688 0 000-5.376zm0 4.33a1.642 1.642 0 110-3.284 1.642 1.642 0 010 3.284z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M15.889 11.173a.644.644 0 100-1.288.644.644 0 000 1.288z"
        fill="url(#prefix__paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={13.2}
          y1={8.083}
          x2={13.2}
          y2={18.379}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E09B3D" />
          <Stop offset={0.3} stopColor="#C74C4D" />
          <Stop offset={0.6} stopColor="#C21975" />
          <Stop offset={1} stopColor="#7024C4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={10.508}
          y1={8.083}
          x2={15.884}
          y2={18.368}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E09B3D" />
          <Stop offset={0.3} stopColor="#C74C4D" />
          <Stop offset={0.6} stopColor="#C21975" />
          <Stop offset={1} stopColor="#7024C4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={15.245}
          y1={8.087}
          x2={16.533}
          y2={18.368}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E09B3D" />
          <Stop offset={0.3} stopColor="#C74C4D" />
          <Stop offset={0.6} stopColor="#C21975" />
          <Stop offset={1} stopColor="#7024C4" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});
