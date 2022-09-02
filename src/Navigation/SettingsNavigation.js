/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditProfile from '../Screens/EditProfile';
import Themes from '../Screens/Themes';

const Stack = createNativeStackNavigator();

function headRight() {
  const navigation = useNavigation();
  return (
    <Text
      style={{ padding: 10, fontWeight: 'bold' }}
      onPress={() => {
        navigation.navigate('Settings');
      }}
    >
      Go Back
    </Text>
  );
}

function SettingsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Themes" component={Themes} options={{ headerRight: headRight }} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerRight: headRight,
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigation;
