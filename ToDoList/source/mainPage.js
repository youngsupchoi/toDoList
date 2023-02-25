import {
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ToDoThings from './toDoThings';
import TopNav from './topNav';
import AddThings from './addThings';
import DeleteThings from './deleteThings';
import EditThing from './editThing';
import axios from 'axios';

const mainPage = ({}) => {
  const [toDos, setToDos] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [deleteIsVisible, setDeleteIsVisible] = useState({
    id: 0,
    visible: false,
  });
  const [editIsVisible, setEditIsVisible] = useState({id: 0, visible: false});

  const getToDos = () => {
    axios
      .get('http://10.16.132.55:3001/todos')
      .then(Response => {
        setToDos(Response.data);
      })
      .catch(error => console.log(error));
  };

  const addToDo = toDo => {
    axios
      .post(`http://10.16.132.55:3001/create`, toDo)
      .then(Response => {
        console.log(Response.data);

        getToDos();
      })
      .catch(error => console.log(error));
  };

  const deleteToDo = indexId => {
    axios
      .delete(`http://10.16.132.55:3001/todos/${indexId}`)
      .then(() => {
        console.log('delete successfully');
      })
      .catch(error => console.log(error));
  };

  const editToDo = todo => {
    axios
      .post(`http://10.16.132.55:3001/todos`, todo)
      .then(() => {
        console.log('edit successfully');
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getToDos();
  }, [deleteIsVisible.id, editIsVisible.id]);

  return (
    <View style={styles.container}>
      <TopNav isVisible={isVisible} setIsVisible={setIsVisible} />

      <AddThings
        addToDo={addToDo}
        getToDos={getToDos}
        setToDos={setToDos}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <DeleteThings
        deleteId={deleteIsVisible.id}
        deleteToDo={deleteToDo}
        deleteIsVisible={deleteIsVisible}
        setDeleteIsVisible={setDeleteIsVisible}
      />
      <EditThing
        editToDo={editToDo}
        editIsVisible={editIsVisible}
        setEditIsVisible={setEditIsVisible}
      />
      <ScrollView style={styles.toDoThings}>
        {toDos.map(item => {
          return (
            <ToDoThings
              toDoId={item.ToDoID}
              setDeleteIsVisible={setDeleteIsVisible}
              setEditIsVisible={setEditIsVisible}
              key={item.author}
              author={item.author}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default mainPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E9ECEF',
    paddingVertical: 50,
    alignItems: 'center',
  },

  headText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  toDoThings: {
    width: '95%',
  },
});
