import React, { FunctionComponent } from 'react';

import { iOSUIKit } from 'react-native-typography';
import { TextProperties, StyleSheet, Animated } from 'react-native';

import { Color } from '../../styles/theme';
import useTheme from '../../styles/useTheme';

export type TypographyProps = {
  variant?: keyof typeof iOSUIKit;
  color?: Color;
  style?: any;
};

const Typography: FunctionComponent<TypographyProps> = props => {
  const { variant = 'body', color = 'white', style, ...other } = props;
  const { colors } = useTheme();

  return (
    <Animated.Text
      style={[iOSUIKit[variant], { color: colors[color] }, StyleSheet.flatten(style)]}
      {...other}
    />
  );
};

export default Typography;
