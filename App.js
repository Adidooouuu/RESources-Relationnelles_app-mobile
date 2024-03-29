import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>(RE)Sources Relationnelles</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Échanges"
          onPress={() => navigation.navigate('Echanges')}
          color="#007BFF"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Défis"
          onPress={() => navigation.navigate('Defis')}
          color="#007BFF"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Articles"
          onPress={() => navigation.navigate('Articles')}
          color="#007BFF"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Vidéos"
          onPress={() => navigation.navigate('Videos')}
          color="#007BFF"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
});

export default HomePage;
