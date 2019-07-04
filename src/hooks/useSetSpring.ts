import { useState, useCallback, useEffect } from 'react';
import useSpring, { Configuration } from './useSpring';

const useSetSpring = (initialValue: number, config?: Configuration, onAnimationEnd?: () => void) => {
  const [value, setValue] = useState(initialValue);
  const animation = useSpring(value, config, onAnimationEnd);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const reset = useCallback(() => {
    animation.setValue(initialValue);
    setValue(initialValue);
  }, [initialValue, setValue]);

  return [animation, setValue, reset] as [typeof animation, typeof setValue, typeof reset];
};

export default useSetSpring;
