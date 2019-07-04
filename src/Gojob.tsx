import React, { FunctionComponent } from 'react';
import { Image, Animated, TouchableOpacity, Button, View } from 'react-native';

import useRouter from 'use-react-router';

import useTheme from './styles/useTheme';
import useSetSpring from './hooks/useSetSpring';
import useOnStepChange from './hooks/useOnStepChange';

import Punchline from './assets/images/Interim.png';
import WereHiring from './assets/images/WereHiring.png';
import Logo from './assets/images/Gojob.png';

const Gojob: FunctionComponent = () => {
  const { colors } = useTheme();
  const { history } = useRouter();

  const [opacity, setOpacity] = useSetSpring(0, { useNativeDriver: true });
  const [translateY, setTranslateY] = useSetSpring(-100, {
    tension: 50,
    friction: 1,
    useNativeDriver: true
  });
  const [hopacity, setHOpacity] = useSetSpring(0, { useNativeDriver: true });
  const [htranslateY, setHTranslateY] = useSetSpring(100, {
    tension: 50,
    friction: 1,
    useNativeDriver: true
  });

  const onStepChange = useOnStepChange(step => {
    switch (step) {
      case 1: {
        setOpacity(1);
        setTranslateY(-30);
        return;
      }
      case 2: {
        setHOpacity(1);
        setHTranslateY(0);
        return;
      }
      default: {
        history.push('/react-native');
        return;
      }
    }
  });

  return (
    <TouchableOpacity
      onPress={onStepChange}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image resizeMode="contain" style={{ width: '70%', maxHeight: '20%' }} source={Logo} />
      <Animated.Image
        resizeMode="contain"
        style={{ opacity, width: '85%', maxHeight: '30%', transform: [{ translateY }] }}
        source={Punchline}
      />
      <Animated.Image
        resizeMode="contain"
        style={{
          opacity: hopacity,
          position: 'absolute',
          top: 20,
          right: 50,
          width: '30%',
          maxHeight: '20%',
          transform: [{ translateY: htranslateY }, { rotate: '15deg' }]
        }}
        source={WereHiring}
      />
      <View style={{ position: 'absolute', bottom: 50 }}>
        <Button color={colors.accent} title="Classic demo" onPress={() => history.push('/classic-demo')} />
        <Button color={colors.accent} title="Modern demo" onPress={() => history.push('/modern-demo')} />
      </View>
    </TouchableOpacity>
  );
};

export default Gojob;
