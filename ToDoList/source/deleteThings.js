import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const deleteThings = ({deleteToDo, deleteIsVisible, setDeleteIsVisible}) => {
  return (
    <Modal
      style={{backgroundColor: 'grin'}}
      animationType="fade"
      transparent={true}
      visible={deleteIsVisible.visible}
      onRequestClose={() => {
        setDeleteIsVisible({id: 0, visible: false});
      }}>
      <View style={styles.background}>
        <View style={styles.addThing}>
          <Text style={[styles.text, {fontWeight: 'bold', fontSize: 15}]}>
            Edit
          </Text>
          <Text style={styles.text}>do you want delete?</Text>
          <View style={styles.submitContainer}>
            <Text
              onPress={() => {
                setDeleteIsVisible({id: 0, visible: false});
              }}
              style={styles.submitText}>
              cancle
            </Text>
            <Text
              onPress={() => {
                deleteToDo(deleteIsVisible.id);
                setDeleteIsVisible({id: 0, visible: false});
              }}
              style={styles.submitText}>
              ok
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default deleteThings;

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
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },

  submitContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
  },
  text: {
    color: 'black',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  submitText: {
    color: 'black',
    margin: 7,
  },
});
