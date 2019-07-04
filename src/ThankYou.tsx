import React, { FunctionComponent } from 'react';

import { TouchableOpacity, Animated } from 'react-native';
import useRouter from 'use-react-router';

import useTheme from './styles/useTheme';
import Typography from './components/Typography';
import useSetSpring from './hooks/useSetSpring';
import useOnStepChange from './hooks/useOnStepChange';

import Heart from './assets/images/React.svg';
import ReactHeart from './components/ReactHeart';

const ThankYou: FunctionComponent = () => {
  const { colors } = useTheme();
  const { history } = useRouter();
  const [translateY, setTranslateY] = useSetSpring(-100, {
    tension: 200,
    friction: 1,
    useNativeDriver: true
  });
  const [opacity, setOpacity] = useSetSpring(0, { tension: 200, friction: 5, useNativeDriver: true });
  const [rotate, setRotate] = useSetSpring(-45, { tension: 200, friction: 5, useNativeDriver: true });

  const handleOnPress = useOnStepChange(step => {
    switch (step) {
      case 1: {
        setTranslateY(0);
        setOpacity(1);
        setRotate(0);
        return;
      }
      default: {
        history.push('/');
      }
    }
  });

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography style={{ transform: [{ translateY: -50 }] }} color="accent" variant="largeTitleEmphasized">
        Thank you!
      </Typography>
      <ReactHeart
        style={{
          opacity,
          width: '30%',
          height: '30%',
          transform: [
            { translateY },
            { rotate: rotate.interpolate({ inputRange: [-45, 45], outputRange: ['-45deg', '45deg'] }) }
          ]
        }}
      />
    </TouchableOpacity>
  );
};

export default ThankYou;
