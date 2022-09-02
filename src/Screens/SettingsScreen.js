/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../Context/user';

function SettingsScreen() {
  const { user, setUser } = useContext(UserContext);

  const navigation = useNavigation();

  const [userPhoneNumber] = useState(null);
  const [userFirstName] = useState(null);
  const [userLastName] = useState(null);
  const [username] = useState(null);

  function handleLogOut() {
    setUser({
      phoneNumber: userPhoneNumber,
      firstName: userFirstName,
      lastName: userLastName,
      username,
    });
    Alert.alert('Profile info deleted.');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: 'https://avatars.githubusercontent.com/u/48841840?v=4' }}
      />
      <Text style={styles.nameof}>
        {user.firstName}
        {', '}
        {user.lastName}
      </Text>
      <Text style={styles.number}>{user.phoneNumber}</Text>
      <Pressable
        style={styles.button_container}
        onPress={() => navigation.navigate('SettingsNavigation', { screen: 'Themes' })}
      >
        <Text style={styles.button_text}>Themes</Text>
      </Pressable>
      <Pressable
        style={styles.button_container}
        onPress={() => navigation.navigate('SettingsNavigation', { screen: 'EditProfile' })}
      >
        <Text style={styles.button_text}>Edit Profile</Text>
      </Pressable>
      <Pressable style={styles.button_container} onPress={handleLogOut}>
        <Text style={styles.button_text}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
  },
  nameof: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  number: {
    fontStyle: 'italic',
  },
  button_container: {
    borderRadius: 7,
    borderWidth: 0.7,
    borderColor: 'blue',
    backgroundColor: '#229ED9',
    padding: 7,
    paddingHorizontal: 17,
    margin: 7,
  },
  button_text: {
    fontSize: 17,
    color: 'white',
  },
});

export default SettingsScreen;
