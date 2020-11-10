import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AnimalDetails: undefined;
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Stack = createStackNavigator<RootStackParamList>();
