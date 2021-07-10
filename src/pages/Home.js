import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting('Good Morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon!');
    } else {
      setGretting('Good Night!');
    }
  }, []);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Renan
      </Text>

      <Text style={{ color: '#FFF' }}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button
        text={'Add'}
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={skill => skill}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
});