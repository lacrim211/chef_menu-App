import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PantryProvider } from './src/context/FoodContext';
import MainScreen from './src/screens/MainScreen';
import NewMealScreen from './src/screens/NewMealScreen';
import GuestMenuScreen from './src/screens/GuestMenuScreen';

export type RootStackParamList = {
  Main: undefined;
  NewMeal: undefined;
  GuestMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PantryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Kitchen Menu' }} />
          <Stack.Screen name="NewMeal" component={NewMealScreen} options={{ title: 'Add New Meal' }} />
          <Stack.Screen name="GuestMenu" component={GuestMenuScreen} options={{ title: 'Guest Menu' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PantryProvider>
  );
}
