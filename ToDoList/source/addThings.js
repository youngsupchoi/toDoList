import {Modal, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Axios from 'axios';

const addThings = ({addToDo, getToDos, setToDos, isVisible, setIsVisible}) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(false);
        console.log(isVisible);
      }}>
      <View style={styles.background}>
        <View style={styles.addThing}>
          <TextInput
            onChangeText={inputText => {
              setAuthor(inputText);
              console.log(typeof author);
            }}
            placeholder="author"
            style={styles.input}></TextInput>
          <TextInput
            onChangeText={inputText => setTitle(inputText)}
            placeholder="title"
            style={styles.input}></TextInput>
          <TextInput
            onChangeText={inputText => setContent(inputText)}
            placeholder="content"
            style={styles.input}></TextInput>
          <TextInput
            onChangeText={inputText => {
              setPriority(inputText);
            }}
            placeholder="priority"
            style={styles.input}></TextInput>
          <View style={styles.submitContainer}>
            <Text
              onPress={() => {
                setIsVisible(false);
                addToDo({
                  author: author,
                  title: title,
                  content: content,
                  priority: priority,
                });
              }}
              style={styles.submit}>
              submit
            </Text>
            <Text
              onPress={() => {
                setIsVisible(false);
              }}
              style={styles.submit}>
              close
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default addThings;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addThing: {
    width: '70%',
    height: 315,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    borderRadius: 10,
    margin: 7,
    paddingHorizontal: 10,
    width: '100%',
    paddingVertical: 8,
  },
  submitContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  submit: {
    backgroundColor: 'black',
    borderRadius: 10,
    fontSize: 15,
    margin: 5,
    color: 'white',
    padding: 10,
  },
});
