import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { get } from '../services/api';

import ResourceItem from '../components/ResourceItem';
import CommentList from '../components/CommentList';

import { layout } from '../styles/layout';
import { colors } from '../styles/colors';

const Tab = createMaterialTopTabNavigator();

function ResourceScreen({ route }) {
    const { id } = route.params;

    const [resource, setResource] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        get(`resources/${id}`, {})
            .then((response) => response.json())
            .then((json) => {
                setResource(json.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <View style={layout.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <Tab.Navigator initialRouteName="Resources"
                    screenOptions={{
                        tabBarActiveTintColor: colors.primary,
                        tabBarInactiveTintColor: colors.text,
                        tabBarStyle: { backgroundColor: colors.background },
                        tabBarIndicatorStyle: { backgroundColor: colors.primary },
                    }}
                >
                    <Tab.Screen name="Resource"
                        options={{ title: "Ressource" }}
                    >
                        {() => (
                            <View>
                                <ResourceItem resource={resource} />
                            </View>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Comments"
                        options={{ title: "Commentaires" }}
                    >
                        {() => (
                            <View>
                                <CommentList params={{ order: "createdAt", direction: "desc", "resource[]": id }} />
                            </View>
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            )}
        </View >
    );
}

export default ResourceScreen;