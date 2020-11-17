import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/loading';
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
import { colors } from '../styles';
import LogOutButton from './log-out-button';

const Navigations: React.FC = () => {
  const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: colors.background,
              headerStyle: { backgroundColor: colors.primary },
              headerRight: () => <LogOutButton />,
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
      )}
    </>
  );
};

export default Navigations;
