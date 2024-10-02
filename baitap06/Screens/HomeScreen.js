// components/HomeScreen.js
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
