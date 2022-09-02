/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './Input.style';

function Input({ label, placeholder, onChangeText, onKeyPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
        />
      </View>
    </View>
  );
}

export default Input;
