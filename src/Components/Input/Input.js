/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './Input.style';

function Input({ label, placeholder, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

export default Input;
