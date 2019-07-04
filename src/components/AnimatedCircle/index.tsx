import React, { FunctionComponent } from 'react';
import { Animated, StyleSheet } from 'react-native';
import useTheme from '../../styles/useTheme';

export type AnimatedCicleProps = {
  style?: any;
};

const AnimatedCicle: FunctionComponent<AnimatedCicleProps> = props => {
  const { style } = props;
  const { colors } = useTheme();

  return (
    <Animated.View
      style={[
        { width: 200, height: 200, borderRadius: 100, backgroundColor: colors.accent },
        StyleSheet.flatten(style)
      ]}
    />
  );
};

export default AnimatedCicle;
