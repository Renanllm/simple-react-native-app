import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});