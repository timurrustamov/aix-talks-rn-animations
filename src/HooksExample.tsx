import React, { useState, useEffect } from 'react';

import { Button, View } from 'react-native';

import Typography from './components/Typography';
import { Color } from './styles/theme';

const colors: Color[] = ['primary', 'accent', 'black', 'paleGrey', 'alert'];

const HooksExample = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [color, setColor] = useState<Color>('primary');

  useEffect(() => {
    setColor(colors[count % colors.length]);
  }, [count]);

  return (
    <View>
      <Typography color={color} variant="largeTitleEmphasized">
        You clicked {count} times
      </Typography>
      <Button onPress={() => setCount(count + 1)} title="Click me !" />
    </View>
  );
};

export default HooksExample;
