import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ResourceList from '../components/ResourceList';
import UserList from '../components/UserList';

import { layout } from '../styles/layout';
import { typography } from '../styles/typography';

function HomeScreen() {
  return (
    <ScrollView style={layout.container}>
      <Text style={typography.title_main}>BIENVENUE SUR LE SITE DES RESSOURCES (RE)LATIONNELLES</Text>

      <Text style={styles.title_secondary}>Le site des Ressources (Re)lationnelles permet de consulter, partager et créer des ressources afin de faciliter l'accès à l'information et de favoriser l'échange entre les personnes.</Text>

      <Text style={[typography.title_main, { marginTop: 20 }]}>LES RESOURCES LES PLUS POPULAIRES, À DÉCOUVRIR !</Text>
      <ResourceList params={{ order: 'likes', direction: 'desc', limit: 3 }} showInfo={false} style={{ height: 200 }} />

      <Text style={[typography.title_main, { marginTop: 20 }]}>LES DERNIERS MEMBRES INSCRITS, BIENVENUE !</Text>
      <UserList params={{ order: 'createdAt', direction: 'desc', limit: 3 }} showInfo={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title_secondary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
});

export default HomeScreen;