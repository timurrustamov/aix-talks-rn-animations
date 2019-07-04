import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

type CreateStyles<T extends any[], U extends {}> = (...args: T) => () => StyleSheet.NamedStyles<U>;

const makeStyles = <T extends any[], U extends {}>(createStyles: CreateStyles<T, U>) => {
  return (...args: T) => {
    const styles = createStyles(...args);
    return useMemo(() => styles(), [...args]);
  };
};

export default makeStyles;
