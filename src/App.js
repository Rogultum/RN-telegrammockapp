/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeContext } from './Context/theme';
import { UserContext } from './Context/user';
import BottomNavigation from './Navigation/BottomNavigation';
import MessageProvider from './Provider/MessageProvider';
import UserProvider from './Provider/UserProvider';
import ChatScreen from './Screens/ChatScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [theme, setTheme] = useState('light');

  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      <UserProvider>
        <MessageProvider>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Stack.Navigator initialRouteName={user === null ? 'Login' : 'User'}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen
                name="User"
                component={BottomNavigation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={({ route }) => ({ title: route.params.firstName })}
              />
            </Stack.Navigator>
          </ThemeContext.Provider>
        </MessageProvider>
      </UserProvider>
    </NavigationContainer>
  );
}

export default App;
