import React from 'react';

import { Animated, TouchableOpacity } from 'react-native';
import { ThemeContext } from './styles/theme';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export type AnimatedExampleProps = {
  style?: any;
};
export type AnimatedExampleState = {
  triggered?: boolean;
  xPosition: Animated.Value;
};

class AnimatedExample extends React.Component<AnimatedExampleProps, AnimatedExampleState> {
  state = {
    triggered: false,
    xPosition: new Animated.Value(-100)
  };

  onPress = () => {
    Animated.spring(this.state.xPosition, {
      toValue: this.state.triggered ? -100 : 100,
      tension: 100,
      friction: 2,
      useNativeDriver: true
    }).start();
    this.setState(state => ({ triggered: !state.triggered }));
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <AnimatedTouchableOpacity
            onPress={this.onPress}
            style={{
              backgroundColor: theme.colors.primary,
              width: 200,
              height: 200,
              borderRadius: 100,
              transform: [{ translateX: this.state.xPosition }],
              ...this.props.style
            }}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default AnimatedExample;
