import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeScreen = require('./view/HomeScreen');
const ArticlesScreen = require('./view/ArticlesScreen');
const CreateAccountScreen = require('./view/CreateAccountScreen');
const DefisScreen = require('./view/DefisScreen');
const EchangesScreen = require('./view/EchangesScreen');
const LoginScreen = require('./view/LoginScreen');
const VideosScreen = require('./view/VideosScreen');

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Articles" component={ArticlesScreen} />
            <Stack.Screen name="Create account" component={CreateAccountScreen} />
            <Stack.Screen name="Defis" component={DefisScreen} />
            <Stack.Screen name="Echanges" component={EchangesScreen} />
            <Stack.Screen name="Log in" component={LoginScreen} />
            <Stack.Screen name="Videos" component={VideosScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigator;