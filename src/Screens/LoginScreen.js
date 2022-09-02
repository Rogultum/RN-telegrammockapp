/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import MyButton from '../Components/Button/MyButton';
import Input from '../Components/Input/Input';
import PickerCountryCode from '../Components/Picker/PickerCountryCode';
import { UserContext } from '../Context/user';

function LoginScreen() {
  const navigation = useNavigation();

  const { user, setUser } = useContext(UserContext);

  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [username, setUsername] = useState(null);

  function handleSignIn() {
    const userInfo = setUser({
      phoneNumber: userPhoneNumber,
      firstName: userFirstName,
      lastName: userLastName,
      username,
    });
  }
  if (user !== null) {
    navigation.navigate('User', {
      user,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* View of "Pick Country Code" */}
      <PickerCountryCode />
      <ScrollView style={{ flex: 1 }}>
        <Input label="Phone Number" placeholder="5xx..." onChangeText={setUserPhoneNumber} />
        <Input
          label="First Name"
          placeholder="Your first name ..."
          onChangeText={setUserFirstName}
        />
        <Input label="Last Name" placeholder="Your last name ..." onChangeText={setUserLastName} />
        <Input label="Username" placeholder="Your username ..." onChangeText={setUsername} />
      </ScrollView>
      <MyButton title="Sign Up" onPress={handleSignIn} />
    </SafeAreaView>
  );
}

export default LoginScreen;
