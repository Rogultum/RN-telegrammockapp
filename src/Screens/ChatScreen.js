import React, { useContext } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';

import Input from '../Components/Input/Input';
import { MessageContext } from '../Context/message';

function ChatScreen({ route }) {
  const { message, setMessage } = useContext(MessageContext);

  function handleSend() {
    Alert.alert(message);
  }
  const { firstName } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.input_container}>
          <Input onChangeText={setMessage} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input_container: {},
});

export default ChatScreen;
