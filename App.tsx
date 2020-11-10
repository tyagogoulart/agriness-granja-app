import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import { Stack } from './src/navigator';
import AnimalDetailScreen from './src/screens/animal-detail-screen';
import HomeScreen from './src/screens/home-screen';
import configureStore from './src/store';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#315ea8' },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Escolha uma granja' }}
          />
          <Stack.Screen name="AnimalDetails" component={AnimalDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
