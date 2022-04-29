import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { theme } from './styles/theme';
import AppProvider from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.background}
    />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
