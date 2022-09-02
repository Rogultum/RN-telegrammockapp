/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/prop-types */
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './Contacts.style';

function Contacts(props) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Chat', { firstName: props.contact.firstName })}>
      <View style={styles.container}>
        <Text style={styles.nameof}>
          {props.contact.firstName}
          {', '}
          {props.contact.lastName}
        </Text>
        <Text style={styles.username}>{props.contact.username}</Text>
      </View>
    </Pressable>
  );
}

export default Contacts;
