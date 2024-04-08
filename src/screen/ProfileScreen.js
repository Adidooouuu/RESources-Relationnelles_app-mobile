import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { get } from '../services/api';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

import UserItem from '../components/UserItem';
import ResourceList from '../components/ResourceList';

const Tab = createMaterialTopTabNavigator();

function ProfileScreen({ route }) {
    const { id } = route.params;

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        get(`users/${id}`, {})
            .then((response) => response.json())
            .then((json) => {
                setUser(json.data);
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
                <View style={{ flex: 1 }}>
                    <Text style={typography.title_main}>Profile de @{user.username}</Text>
                    <UserItem user={user} />
                    <Tab.Navigator initialRouteName="Resources"
                        screenOptions={{
                            tabBarLabelStyle: { fontSize: 10 },
                            tabBarActiveTintColor: colors.primary,
                            tabBarInactiveTintColor: colors.text,
                            tabBarStyle: { backgroundColor: colors.background },
                            tabBarIndicatorStyle: { backgroundColor: colors.primary },
                        }}
                    >
                        <Tab.Screen name="Resources" options={{ title: "Ressources" }}>
                            {() => (
                                <View>
                                    <ResourceList params={{ order: "createdAt", direction: "desc", "author[]": id }} />
                                </View>
                            )}
                        </Tab.Screen>

                        <Tab.Screen name="Shared" options={{ title: "Partagées" }}>
                            {() => (
                                <View>
                                    <ResourceList params={{ order: "createdAt", direction: "desc", sharedBy: id }} />
                                </View>
                            )}
                        </Tab.Screen>

                        <Tab.Screen name="Liked" options={{ title: "Aimées" }}>
                            {() => (
                                <View>
                                    <ResourceList params={{ order: "createdAt", direction: "desc", likedBy: id }} />
                                </View>
                            )}
                        </Tab.Screen>

                        <Tab.Screen name="Exploited" options={{ title: "Exploitées" }}>
                            {() => (
                                <View>
                                    <ResourceList params={{ order: "createdAt", direction: "desc", exploitedBy: id }} />
                                </View>
                            )}
                        </Tab.Screen>
                    </Tab.Navigator>
                </View>
            )
            }
        </View >
    );
}

export default ProfileScreen;