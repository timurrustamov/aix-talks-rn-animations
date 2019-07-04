import React, { FunctionComponent, useState } from 'react';
import { View, Slider, Button } from 'react-native';
import useTheme from './styles/useTheme';
import ImperativeDemo from './ImperativeDemo';
import useRouter from 'use-react-router';

const ClassicDemo: FunctionComponent = () => {
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
      <ImperativeDemo scale={scale} />
      <Slider
        style={{ position: 'absolute', bottom: 200, width: dimensions.width - 100 }}
        value={scale}
        minimumValue={0.5}
        maximumValue={4}
        step={0.1}
        onValueChange={e => setScale(e)}
      />
      <View style={{ position: 'absolute', bottom: 50 }}>
        <Button color={colors.accent} title="Next" onPress={() => history.push('/modern-demo')} />
      </View>
    </View>
  );
};

export default ClassicDemo;
