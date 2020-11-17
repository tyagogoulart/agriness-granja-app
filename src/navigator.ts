import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AnimalDetail: { animalId: string };
  Login: undefined;
  GranjaAnimals: { granjaId: number };
  AnimalUpdate: { animalId: string };
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type AnimalUpdateScreenRouteProp = RouteProp<RootStackParamList, 'AnimalUpdate'>;
export type AnimalUpdateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AnimalUpdate'
>;

export type AnimalDetailScreenRouteProp = RouteProp<RootStackParamList, 'AnimalDetail'>;
export type AnimalDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AnimalDetail'
>;

export type GranjaAnimalsScreenRouteProp = RouteProp<RootStackParamList, 'GranjaAnimals'>;
export type GranjaAnimalsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GranjaAnimals'
>;

export const Stack = createStackNavigator<RootStackParamList>();
