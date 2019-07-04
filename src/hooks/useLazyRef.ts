import { MutableRefObject, useRef } from 'react';

const EMPTY_REF = '@@_EMPTY_@@';

/** Create a lazy instatiated React's ref */
const useLazyRef = <T>(initializer: () => T) => {
  const ref = useRef<any>(EMPTY_REF);
  if (ref.current === EMPTY_REF) {
    ref.current = initializer();
  }
  return ref as MutableRefObject<T>;
};

export default useLazyRef;
