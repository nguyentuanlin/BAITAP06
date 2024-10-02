// components/MemeScreen.js
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Text, Animated, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons

export default function MemeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const bounceAnim = useRef(new Animated.Value(1)).current; // Initial scale value: 1

  useEffect(() => {
    // Fade in animation for the title and quote
    Animated.timing(fadeAnim, {
      toValue: 1, // Final value for opacity: 1
      duration: 1500, // Duration of the fade animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    // Bounce animation for the icon
    Animated.spring(bounceAnim, {
      toValue: 1.2, // Scale the icon up to 1.2
      friction: 2, // Controls the bounciness
      tension: 160, // Controls the speed of the bounce
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      // After bouncing, scale back to original size
      Animated.spring(bounceAnim, {
        toValue: 1, // Scale back to 1
        friction: 2,
        tension: 160,
        useNativeDriver: true,
      }).start();
    });
  }, [fadeAnim, bounceAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>Chúc mừng!</Text>
      </Animated.View>
      <Animated.View style={{ transform: [{ scale: bounceAnim }] }}>
        <Icon name="happy-outline" size={150} color="#FFD700" style={styles.icon} />
      </Animated.View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.quote}>
          "Đời không phải là cuộc chiến, nhưng bạn phải chiến đấu để sống!"
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  icon: {
    marginBottom: 20,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    marginHorizontal: 20,
  },
});
