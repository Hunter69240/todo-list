import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import Task from '../components/Task';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [task, setTask] = useState();
  const [taskitems, settaskitems] = useState([]);

  const handleaddtask = () => {
    if (task?.trim()) {
      settaskitems([...taskitems, task]);
      setTask(null);
    }
    Keyboard.dismiss();
  };

  const completetask = (index) => {
    let itemsCopy = [...taskitems];
    itemsCopy.splice(index, 1);
    settaskitems(itemsCopy);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E8EAED' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            {/* Header */}
            <View style={styles.listwrapper}>
              <Text style={styles.task}>Today's Tasks</Text>
            </View>

            {/* Task List */}
            <ScrollView contentContainerStyle={styles.items}>
              {taskitems.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => completetask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Input Area */}
            <View style={styles.writetaskwrapper}>
              <TextInput
                style={styles.input}
                placeholder='Write task here'
                onChangeText={(text) => setTask(text)}
                value={task}
              />
              <TouchableOpacity onPress={handleaddtask}>
                <View style={styles.addwrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  listwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  task: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  items: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  writetaskwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    backgroundColor: '#E8EAED',
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: '#55BCF6',
  },
});
