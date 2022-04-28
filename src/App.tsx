import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.background}
    />
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
