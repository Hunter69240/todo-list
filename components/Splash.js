import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function Splash({ navigation }) {
  useEffect(() => {
    setupNotificationChannel();

    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const setupNotificationChannel = async () => {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('task-channel', {
        name: 'Task Channel',
        importance: Notifications.AndroidImportance.HIGH,
        sound: true,
      });
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.logoEmoji}>📝</Text>
      <Text style={styles.text}>To-Do List App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logoEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
