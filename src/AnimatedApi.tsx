import React, { FunctionComponent } from 'react';

import { TouchableOpacity, Animated } from 'react-native';

import Typography from './components/Typography';
import useTheme from './styles/useTheme';
import useSetSpring from './hooks/useSetSpring';

import AnimatedCode from './assets/images/Animated.png';
import useOnStepChange from './hooks/useOnStepChange';
import AnimatedExample from './AnimatedExample';
import useRouter from 'use-react-router';

const AnimatedApi: FunctionComponent = () => {
  const { colors } = useTheme();
  const { history } = useRouter();
  const [translateY, setTranslateY] = useSetSpring(0, { useNativeDriver: true });
  const [opacity, setOpacity] = useSetSpring(0, { useNativeDriver: true });
  const [exampleOpacity, setExampleOpacity] = useSetSpring(0, { useNativeDriver: true });

  const handleOnPress = useOnStepChange(step => {
    switch (step) {
      case 1: {
        setTranslateY(-150);
        setOpacity(1);
        return;
      }
      case 2: {
        setExampleOpacity(1);
        return;
      }
      default:
        history.push('/hooks');
        return;
    }
  });

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}
    >
      <Typography color="primary" variant="largeTitleEmphasized" style={{ transform: [{ translateY }] }}>
        Animated
      </Typography>
      <Animated.Image
        resizeMode="contain"
        style={{ opacity, width: '85%', maxHeight: '50%', transform: [{ translateY }] }}
        source={AnimatedCode}
      />
      <AnimatedExample style={{ position: 'absolute', bottom: 100, opacity: exampleOpacity }} />
    </TouchableOpacity>
  );
};

export default AnimatedApi;
