import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './App';
import EchangesScreen from './EchangesScreen';
import DefisScreen from './DefisScreen';
import ArticlesScreen from './ArticlesScreen';
import VideosScreen from './VideosScreen';

const Stack = createStackNavigator();

// Assurez-vous qu'il n'y a pas d'autre déclaration ou importation nommée 'App' dans ce fichier
function AppNavigator() { // Renommez App en AppNavigator si App est déjà déclaré ailleurs
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: '(RE)Sources Relationnelles' }} />
        <Stack.Screen name="Echanges" component={EchangesScreen} />
        <Stack.Screen name="Defis" component={DefisScreen} />
        <Stack.Screen name="Articles" component={ArticlesScreen} />
        <Stack.Screen name="Videos" component={VideosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator; // Assurez-vous que l'exportation correspond au nouveau nom