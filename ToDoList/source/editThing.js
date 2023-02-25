import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const editThing = ({editToDo, editIsVisible, setEditIsVisible}) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={editIsVisible.visible}
      onRequestClose={() => {
        setEditIsVisible({id: 0, visible: false});
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <TextInput
            onChange={inputText => {
              setAuthor(inputText);
            }}
            placeholder="author"
            style={styles.input}></TextInput>
          <TextInput
            onChange={inputText => {
              setTitle(inputText);
            }}
            placeholder="title"
            style={styles.input}></TextInput>
          <TextInput
            onChange={inputText => {
              setContent(inputText);
            }}
            placeholder="content"
            style={styles.input}></TextInput>
          <TextInput
            onChange={inputText => {
              setPriority(inputText);
            }}
            placeholder="priority"
            style={styles.input}></TextInput>
          <View style={styles.submitContainer}>
            <Text
              onPress={() => {
                editToDo({
                  title: title,
                  content: content,
                  author: author,
                  priority: priority,
                });
                setEditIsVisible({id: 0, visible: false});
              }}
              style={styles.submit}>
              submit
            </Text>
            <Text
              onPress={() => {
                setEditIsVisible({id: 0, visible: false});
              }}
              style={styles.submit}>
              cancle
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default editThing;

const styles = StyleSheet.create({
  modalBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '70%',
    height: 315,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
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
  submit: {
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
    fontSize: 15,
    margin: 5,
    padding: 10,
  },
  submitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
