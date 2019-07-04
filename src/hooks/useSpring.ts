import { useEffect } from 'react';
import { Animated } from 'react-native';
import { Omit } from 'react-router';

import useLazyRef from './useLazyRef';

export type Configuration = Omit<Animated.SpringAnimationConfig, 'toValue'>;

const useSpring = (value: number, config?: Configuration, onAnimationEnd?: () => void) => {
  const animatedRef = useLazyRef(() => new Animated.Value(value));
  useEffect(() => {
    const animation = Animated.spring(animatedRef.current, { toValue: value, ...config });
    animation.start(onAnimationEnd);
    return () => {
      animation.stop();
    };
  }, [value]);

  return animatedRef.current;
};

export default useSpring;
