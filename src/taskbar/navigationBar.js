import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/AccueilScreen';

import ProfilesScreen from '../screen/ProfilesScreen';
import ProfileScreen from '../screen/ProfileScreen';

import ResourcesScreen from '../screen/ResourcesScreen';
import ResourceScreen from '../screen/ResourceScreen';

import SearchScreen from '../screen/SearchScreen';

import { colors } from '../styles/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: 'Accueil' }} component={HomeScreen} />
            <Stack.Screen name="Profile" options={{ title: 'Profil' }} component={ProfileScreen} />
            <Stack.Screen name="Resource" options={{ title: 'Ressource' }} component={ResourceScreen} />
        </Stack.Navigator>
    );
}

function ProfilesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profiles" options={{ title: 'Profils' }} component={ProfilesScreen} />
            <Stack.Screen name="Profile" options={{ title: 'Profil' }} component={ProfileScreen} />
            <Stack.Screen name="Resource" options={{ title: 'Ressource' }} component={ResourceScreen} />
        </Stack.Navigator>
    );
}

function ResourcesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Resources" options={{ title: 'Ressources' }} component={ResourcesScreen} />
            <Stack.Screen name="Resource" options={{ title: 'Ressource' }} component={ResourceScreen} />
        </Stack.Navigator>
    );
}

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" options={{ title: 'Recherche' }} component={SearchScreen} />
        </Stack.Navigator>
    );
}

function NavigationBar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'HomeStack':
                            iconName = 'home';
                            break;
                        case 'ProfilesStack':
                            iconName = 'account-group';
                            break;
                        case 'ResourcesStack':
                            iconName = 'book-open-page-variant';
                            break;
                        case 'SearchStack':
                            iconName = 'magnify';
                            break;
                        default:
                            iconName = 'home';
                            break;
                    }
                    return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
                },
                tabBarActiveTintColor: colors.primary,
            })}
        >
            <Tab.Screen name="HomeStack" options={{ title: 'Accueil', headerShown: false }} component={HomeStack} />
            <Tab.Screen name="ProfilesStack" options={{ title: 'Profils', headerShown: false }} component={ProfilesStack} />
            <Tab.Screen name="ResourcesStack" options={{ title: 'Ressources', headerShown: false }} component={ResourcesStack} />
            <Tab.Screen name="SearchStack" options={{ title: 'Recherche', headerShown: false }} component={SearchStack} />
        </Tab.Navigator>
    );
}

export default NavigationBar;