import { useEffect } from 'react';

const useInterval = (cb: () => void, timeout: number, dependencies = []) => {
  useEffect(() => {
    const interval = setInterval(cb, timeout);
    return () => clearInterval(interval);
  }, dependencies);
};

export default useInterval;
