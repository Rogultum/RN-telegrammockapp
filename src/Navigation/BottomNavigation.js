/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable no-unused-expressions */

/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import ContactsScreen from '../Screens/ContactsScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import UserScreen from '../Screens/UserScreen';
import SettingsNavigation from './SettingsNavigation';

const BottomNav = createBottomTabNavigator();

function headRight() {
  const navigation = useNavigation();
  return (
    <Text
      style={{ padding: 10, fontWeight: 'bold' }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      Go Back
    </Text>
  );
}

function BottomNavigation({ route }) {
  const { user } = route.params;
  return (
    <BottomNav.Navigator>
      {/* <BottomNav.Screen
        name="ChatList"
        component={UserScreen}
        options={{
          title: user.firstName,
          tabBarButton: () => {
            null;
          },
        }}
      /> */}
      <BottomNav.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ headerRight: headRight }}
      />
      <BottomNav.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerRight: headRight }}
      />
      <BottomNav.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerRight: headRight }}
      />
      <BottomNav.Screen
        name="SettingsNavigation"
        component={SettingsNavigation}
        options={{
          headerShown: false,
          tabBarButton: () => {
            null;
          },
        }}
      />
    </BottomNav.Navigator>
  );
}

export default BottomNavigation;
