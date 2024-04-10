import { View } from 'react-native';

import UserList from '../components/UserList';

import { layout } from '../styles/layout';

function ProfilesScreen() {
  return (
    <View style={layout.container}>
      <UserList params={{ order: "createdAt", direction: "desc" }} />
    </View>
  );
};

export default ProfilesScreen;