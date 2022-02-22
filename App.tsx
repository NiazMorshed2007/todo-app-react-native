import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import Task from "./components/Task";


export default function App() {
  const [task, setTasks] = useState('dasgf');
  const tasks: string[] = ['hghdsaf', 'gdasf', 'dsajfas'];
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.head}>Today's Task</Text>
      </View>
      <View style={styles.tasksWrapper}>
        {tasks.map((task, i) => (
            <Task task={task} key={i} />
        ))}
      </View>
      <KeyboardAvoidingView style={styles.writeTaskWrapper} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput style={styles.input} placeholder={'Enter you task'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addTask}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  head: {
    fontSize: 25,
    fontWeight: "bold",
  },
  tasksWrapper: {
    paddingTop: 40,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addTask: {

  }
});
