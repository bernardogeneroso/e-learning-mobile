import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppProvider from './src/hooks';

import Routes from './src/routes';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" translucent />

        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
}
