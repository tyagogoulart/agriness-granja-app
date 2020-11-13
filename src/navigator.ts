import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AnimalDetail: undefined;
  Login: undefined;
  GranjaAnimals: undefined;
  AnimalUpdate: { animalId: string };
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type AnimalDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AnimalDetail'
>;

export type GranjaAnimalsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GranjaAnimals'
>;

export type GranjaAnimalsScreenRouteProp = RouteProp<RootStackParamList, 'GranjaAnimals'>;

export const Stack = createStackNavigator<RootStackParamList>();
