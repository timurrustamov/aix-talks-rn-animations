import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

import useRouter from 'use-react-router';

import Typography from './components/Typography';
import useTheme from './styles/useTheme';
import useSetSpring from './hooks/useSetSpring';
import HooksExample from './HooksExample';
import useOnStepChange from './hooks/useOnStepChange';

import HooksCode from './assets/images/HooksExample.png';

const HooksApi: FunctionComponent = () => {
  const { colors } = useTheme();
  const { history } = useRouter();
  const [translateY, setTranslateY] = useSetSpring(0, { useNativeDriver: true });
  const [opacity, setOpacity] = useSetSpring(0, { useNativeDriver: true });
  const [exampleOpacity, setExampleOpacity] = useSetSpring(0, { useNativeDriver: true });

  const handleOnPress = useOnStepChange(step => {
    switch (step) {
      case 1: {
        setTranslateY(-100);
        setOpacity(1);
        return;
      }
      case 2: {
        setExampleOpacity(1);
        return;
      }
      default: {
        history.push('/classic-demo');
      }
    }
  });

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}
    >
      <Typography color="primary" variant="largeTitleEmphasized" style={{ transform: [{ translateY }] }}>
        React Hooks
      </Typography>
      <Animated.Image
        resizeMode="contain"
        style={{ opacity, width: '95%', maxHeight: '70%', transform: [{ translateY }] }}
        source={HooksCode}
      />
      <Animated.View style={{ position: 'absolute', bottom: 100, opacity: exampleOpacity }}>
        <HooksExample />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default HooksApi;
