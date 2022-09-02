import React, { useState } from 'react';
import { View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

function PickerCountryCode() {
  const [countryCode, setCountryCode] = useState();
  return (
    <View>
      <Picker selectedValue={countryCode} onValueChange={(itemValue) => setCountryCode(itemValue)}>
        <Picker.Item label="Turkey +90" value="+90" />
        <Picker.Item label="Germany +49" value="+49" />
        <Picker.Item label="UK +44" value="+44" />
      </Picker>
    </View>
  );
}

export default PickerCountryCode;
