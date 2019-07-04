import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

import useTheme from './styles/useTheme';
import useSetSpring from './hooks/useSetSpring';

import Logo from './assets/images/Hooks.png';
import useOnStepChange from './hooks/useOnStepChange';
import useRouter from 'use-react-router';
import Typography from './components/Typography';

const ReactNative: FunctionComponent = () => {
  const { colors } = useTheme();
  const { history } = useRouter();

  const [rotateZ, setRotateZ] = useSetSpring(-720, { tension: 20, friction: 120 });
  const onPress = useOnStepChange(step => {
    switch (step) {
      case 1: {
        setRotateZ(720);
        return;
      }
      default: {
        history.push('/animated');
        return;
      }
    }
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Animated.Image
        source={Logo}
        resizeMode="contain"
        style={[
          { width: '35%' },
          {
            transform: [
              {
                rotateZ: rotateZ.interpolate({
                  inputRange: [-920, 920],
                  outputRange: ['-920deg', '920deg']
                })
              }
            ]
          }
        ]}
      />
      <Typography color="primary" variant="largeTitleEmphasized">
        React Native Animations
      </Typography>
    </TouchableOpacity>
  );
};

export default ReactNative;
