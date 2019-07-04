import React, { FunctionComponent } from 'react';
import AnimatedCicle from './components/AnimatedCircle';

export type HooksDemoProps = {
  scale: number;
};

const HooksDemo: FunctionComponent<HooksDemoProps> = props => {
  return (
    <AnimatedCicle
      style={{
        transform: [{ scale: props.scale }]
      }}
    />
  );
};

export default HooksDemo;
