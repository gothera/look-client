import React, { useRef } from 'react';
import { View, Text, Animated, LayoutChangeEvent } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { SCREEN_WIDTH } from '../../../res/constants';
import { color } from '../../../theme';
import LineDivider from '../LineDivider';
import { styles } from './styles';

interface OwnProps {
  routes: { key: string; title: string }[];
  headerComponent: JSX.Element;
  scenes: (JSX.Element | null)[];
  onLayoutHeader: (event: LayoutChangeEvent) => void;
  headerHeight: number;
  scrollY: Animated.Value;
  tabIndex: number;
  onTabChange: (newIndex: number) => void;
  isScrolling: boolean;
}

const TabListsWithHeader: React.FC<OwnProps> = ({
  routes,
  headerComponent,
  scenes,
  onLayoutHeader,
  headerHeight,
  scrollY,
  tabIndex,
  onTabChange,
  isScrolling,
}) => {
  const yHeader = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolateRight: 'clamp',
  });

  const yTabBar = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [headerHeight, 0],
    extrapolateRight: 'clamp',
  });

  const renderHeader = () => {
    return (
      <Animated.View
        style={[
          { transform: [{ translateY: yHeader }] },
          {
            top: 0,
            width: '100%',
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
          },
        ]}
        onLayout={onLayoutHeader}
      >
        {headerComponent}
      </Animated.View>
    );
  };

  const renderTabScene = ({
    route,
  }: {
    route: { key: string; title: string };
  }) => {
    if (route.key === 'gallery') {
      return scenes[0];
    } else if (route.key === 'services') {
      return scenes[1];
    } else {
      return scenes[2];
    }
  };

  const renderLabel = ({
    route,
    focused,
  }: {
    route: { key: string; title: string };
    focused: boolean;
  }) => {
    return (
      <Text
        style={[
          styles.label,
          { color: focused ? color.textSecondary : color.muted },
        ]}
      >
        {route.title}
      </Text>
    );
  };

  const renderTabBar = (props: any) => {
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{ translateY: yTabBar }],
          width: '100%',
        }}
      >
        <TabBar
          {...props}
          onTabPress={({ preventDefault }) => {
            if (isScrolling) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
        <LineDivider />
      </Animated.View>
    );
  };

  const renderTabs = () => {
    return (
      <TabView
        onIndexChange={onTabChange}
        navigationState={{ index: tabIndex, routes }}
        renderScene={renderTabScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: SCREEN_WIDTH,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderTabs()}
    </View>
  );
};

export default TabListsWithHeader;
