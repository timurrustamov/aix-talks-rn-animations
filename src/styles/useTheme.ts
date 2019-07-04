import { useContext } from 'react';

import { ThemeContext } from './theme';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
