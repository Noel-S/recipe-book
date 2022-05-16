import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Navigation />
    </>
  );
};

export default App;
