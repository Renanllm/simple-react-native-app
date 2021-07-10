import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});