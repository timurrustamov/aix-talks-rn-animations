import React, { FunctionComponent } from 'react';

import { NativeRouter } from 'react-router-native';

import Main from './src';

/** Disable yellow box */
console.disableYellowBox = true;

const App: FunctionComponent = () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};

export default App;
