import React, { FunctionComponent, useState } from 'react';

import { View, Slider, Button } from 'react-native';

import useTheme from './styles/useTheme';
import HooksDemo from './HooksDemo';
import useRouter from 'use-react-router';

const ModernDemo: FunctionComponent = () => {
  const [scale, setScale] = useState(1);
  const { colors, dimensions } = useTheme();
  const { history } = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <HooksDemo scale={scale} />
      <Slider
        style={{ position: 'absolute', bottom: 200, width: dimensions.width - 100 }}
        value={scale}
        minimumValue={0.5}
        maximumValue={4}
        step={0.1}
        onValueChange={e => setScale(e)}
      />
      <View style={{ position: 'absolute', bottom: 50 }}>
        <Button color={colors.accent} title="Next" onPress={() => history.push('/thank-you')} />
      </View>
    </View>
  );
};

export default ModernDemo;
