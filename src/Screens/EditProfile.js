/* eslint-disable no-unused-vars */

/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import { Alert, SafeAreaView, ScrollView } from 'react-native';

import MyButton from '../Components/Button/MyButton';
import Input from '../Components/Input/Input';
import PickerCountryCode from '../Components/Picker/PickerCountryCode';
import { UserContext } from '../Context/user';

function EditProfile() {
  const { user, setUser } = useContext(UserContext);

  const [userPhoneNumber, setUserPhoneNumber] = useState(user.phoneNumber);
  const [userFirstName, setUserFirstName] = useState(user.firstName);
  const [userLastName, setUserLastName] = useState(user.lastName);
  const [username, setUsername] = useState(user.username);

  function handleUpdate() {
    setUser({
      phoneNumber: userPhoneNumber,
      firstName: userFirstName,
      lastName: userLastName,
      username,
    });
    Alert.alert('Profile Updated!');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* View of "Pick Country Code" */}
      <PickerCountryCode />
      <ScrollView style={{ flex: 1 }}>
        <Input
          label="Updated phone Number"
          placeholder="5xx..."
          onChangeText={setUserPhoneNumber}
        />
        <Input
          label="First Name"
          placeholder="Updated first name ..."
          onChangeText={setUserFirstName}
        />
        <Input
          label="Last Name"
          placeholder="Updated last name ..."
          onChangeText={setUserLastName}
        />
        <Input label="Username" placeholder="Updated username ..." onChangeText={setUsername} />
      </ScrollView>
      <MyButton title="Update Profile" onPress={handleUpdate} />
    </SafeAreaView>
  );
}

export default EditProfile;
