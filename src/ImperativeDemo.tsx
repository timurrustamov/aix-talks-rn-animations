import React from 'react';
import { Animated } from 'react-native';
import AnimatedCicle from './components/AnimatedCircle';

export type ImperativeDemoProps = {
  scale: number;
};
export type ImperativeDemoState = {
  animatedScale: Animated.Value;
};

class ImperativeDemo extends React.Component<ImperativeDemoProps, ImperativeDemoState> {
  state: ImperativeDemoState = {
    animatedScale: new Animated.Value(1)
  };

  componentDidMount() {
    Animated.spring(this.state.animatedScale, {
      toValue: this.props.scale,
      tension: 100,
      friction: 2,
      useNativeDriver: true
    }).start();
  }

  componentDidUpdate(previousProps: ImperativeDemoProps) {
    if (previousProps.scale !== this.props.scale) {
      Animated.spring(this.state.animatedScale, {
        toValue: this.props.scale,
        tension: 100,
        friction: 2,
        useNativeDriver: true
      }).start();
    }
  }

  componentWillUnmount() {
    this.state.animatedScale.stopAnimation();
  }

  render() {
    return <AnimatedCicle style={{ transform: [{ scale: this.state.animatedScale }] }} />;
  }
}

export default ImperativeDemo;
