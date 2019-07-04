import React, { FunctionComponent, useEffect } from 'react';
import AnimatedCicle from './components/AnimatedCircle';
import { Configuration } from './hooks/useSpring';
import useLazyRef from './hooks/useLazyRef';
import { Animated } from 'react-native';

export type HooksDemoProps = {
  scale: number;
};

const useSpring = (value: number, config?: Configuration) => {
  const animated = useLazyRef(() => new Animated.Value(value));
  useEffect(() => {
    const animation = Animated.spring(animated.current, { toValue: value, ...config });
    animation.start();
    return () => animation.stop();
  }, [value]);

  return animated.current;
};

const HooksDemo: FunctionComponent<HooksDemoProps> = props => {
  const scale = useSpring(props.scale, { tension: 100, friction: 2, useNativeDriver: true });
  const translateY = useSpring(props.scale * -25, { tension: 200, friction: 2, useNativeDriver: true });

  return (
    <AnimatedCicle
      style={{
        transform: [{ scale }, { translateY }]
      }}
    />
  );
};

export default HooksDemo;
