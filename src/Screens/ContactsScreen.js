import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import Contacts from '../Components/Contacts/Contacts';
import ContactsData from '../Data/ContactsData.json';

function ContactsScreen() {
  const [contactsList] = useState(ContactsData);

  const renderContacts = ({ item }) => <Contacts contact={item} />;

  return (
    <View>
      <FlatList data={contactsList} keyExtractor={(item) => item.id} renderItem={renderContacts} />
    </View>
  );
}

export default ContactsScreen;
