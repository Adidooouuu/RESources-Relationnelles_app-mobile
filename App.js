import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App'; // Assurez-vous d'avoir ce fichier dans votre projet
import EchangesScreen from './EchangesScreen'; // Remplacez par vos propres chemins de fichier
import DefisScreen from './DefisScreen';
import ArticlesScreen from './ArticlesScreen';
import VideosScreen from './VideosScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={App} 
          options={{ title: '(RE)Sources Relationnelles' }}
        />
        <Stack.Screen 
          name="Echanges" 
          component={EchangesScreen} 
          options={{ title: 'Échanges' }}
        />
        <Stack.Screen 
          name="Defis" 
          component={DefisScreen} 
          options={{ title: 'Défis' }}
        />
        <Stack.Screen 
          name="Articles" 
          component={ArticlesScreen} 
          options={{ title: 'Articles' }}
        />
        <Stack.Screen 
          name="Videos" 
          component={VideosScreen} 
          options={{ title: 'Vidéos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
