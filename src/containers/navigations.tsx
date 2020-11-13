import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Stack } from '../navigator';
import AnimalDetailScreen from '../screens/animal-detail-screen';
import AnimalUpdateScreen from '../screens/animal-update-screen';
import GranjaAnimalsScreen from '../screens/granja-animals-screen';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import { getAccessToken } from '../services/storage';
import { RootState } from '../store/reducers';
import { UpdateAuthenticatedRequest } from '../store/reducers/auth/actions';
import { getActiveUserRequest } from '../store/reducers/user/actions';
import SignOutButton from './sign-out-button';

const Navigations: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const authenticated = async () => {
      const hasToken = await getAccessToken();
      dispatch(UpdateAuthenticatedRequest({ isAuthenticated: !!hasToken }));
      if (hasToken) {
        dispatch(getActiveUserRequest());
      }
    };
    authenticated();
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fafafa',
          headerStyle: { backgroundColor: '#315ea8' },
          headerRight: () => <SignOutButton />,
        }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Granjas' }} />
            <Stack.Screen
              name="GranjaAnimals"
              component={GranjaAnimalsScreen}
              options={{ title: 'Animais' }}
            />
            <Stack.Screen
              name="AnimalDetail"
              component={AnimalDetailScreen}
              options={{ title: 'Informações do Animal' }}
            />
            <Stack.Screen
              name="AnimalUpdate"
              component={AnimalUpdateScreen}
              options={{ title: 'Atualizar um animal' }}
            />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
