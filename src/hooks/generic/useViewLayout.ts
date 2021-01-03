import React from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

/**
 * Hook for onLayout Views
 */
export const useViewLayout = (): [
  LayoutRectangle,
  (event: LayoutChangeEvent) => void,
] => {
  const [viewLayout, setViewLayout] = React.useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const onLayout = React.useCallback((event: LayoutChangeEvent) => {
    const { width, height, x, y } = event.nativeEvent.layout;
    if (
      viewLayout.width === width &&
      viewLayout.height === height &&
      viewLayout.x === x &&
      viewLayout.y === y
    ) {
      return;
    }
    setViewLayout({ width, height, x, y });
  }, []);

  return [viewLayout, onLayout];
};
