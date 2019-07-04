import React, { FunctionComponent } from 'react';

import { Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

import Gojob from './Gojob';
import ReactNative from './ReactNative';
import AnimatedApi from './AnimatedApi';
import HooksApi from './HooksApi';
import ClassicDemo from './ClassicDemo';
import ModernDemo from './ModernDemo';
import ThankYou from './ThankYou';

const Main: FunctionComponent = () => {
  return (
    <Stack>
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/modern-demo" component={ModernDemo} />
      <Route path="/classic-demo" component={ClassicDemo} />
      <Route path="/hooks" component={HooksApi} />
      <Route path="/animated" component={AnimatedApi} />
      <Route path="/react-native" component={ReactNative} />
      <Route path="/" component={Gojob} />
    </Stack>
  );
};

export default Main;
