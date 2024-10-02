// components/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import styles from '../Styles';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInput = (value) => {
    const formattedValue = value.replace(/[^0-9]/g, '');
    if (formattedValue.length <= 10) {
      setPhoneNumber(formatPhoneNumber(formattedValue));
    }
  };

  const formatPhoneNumber = (value) => {
    const phoneNumberPattern = /^(\d{3})(\d{3})(\d{4})$/;
    const matches = value.match(phoneNumberPattern);
    if (matches) {
      return `${matches[1]}-${matches[2]}-${matches[3]}`;
    }
    return value;
  };

  const handleContinue = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Invalid phone number. Please try again.');
    } else {
      navigation.navigate('Meme');
    }
  };

  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
    return phoneNumberPattern.test(number);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChangeText={handleInput}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
