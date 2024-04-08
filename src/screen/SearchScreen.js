import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserList from '../components/UserList';
import ResourceList from '../components/ResourceList';
import { layout } from '../styles/layout';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [searchKey, setSearchKey] = useState(0);

  const handleSearch = () => {
    setSearchKey(searchKey + 1);
  };

  const handleKeyboardSubmit = () => {
    Keyboard.dismiss();
    handleSearch();
  };

  return (
    <View style={layout.container}>
      <Text style={typography.title_main}>Faire une recherche</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleKeyboardSubmit}
          placeholder="Rechercher..."
          placeholderTextColor={colors.text}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <MaterialCommunityIcons name="magnify" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarStyle: { backgroundColor: colors.background },
          tabBarIndicatorStyle: { backgroundColor: colors.primary },
        }}
      >
        <Tab.Screen
          name="Profiles"
          options={{ title: "Profils" }}
        >
          {() => (
            <View key={searchKey}>
              <UserList
                params={{
                  order: 'createdAt',
                  direction: 'desc',
                  search: searchText,
                }}
              />
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Resources"
          options={{ title: "Ressources" }}
        >
          {() => (
            <View key={searchKey}>
              <ResourceList
                params={{
                  order: 'createdAt',
                  direction: 'desc',
                  search: searchText,
                }}
              />
            </View>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = {
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    marginLeft: 10,
  },
};

export default SearchScreen;