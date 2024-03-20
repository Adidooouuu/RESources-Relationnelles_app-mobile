import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './App';
import HomeEchanges from './src/screen/EchangesScreen';
import HomeDefis from './src/screen/DefisScreen';
import HomeArticles from './src/screen/ArticlesScreen';
import HomeVideos from './src/screen/VideosScreen';

const Stack = createStackNavigator();


function AppNavigator() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: '(RE)Sources Relationnelles' }} />
        <Stack.Screen name="Echanges" component={HomeEchanges} />
        <Stack.Screen name="Defis" component={HomeDefis} />
        <Stack.Screen name="Articles" component={HomeArticles} />
        <Stack.Screen name="Videos" component={HomeVideos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator; 