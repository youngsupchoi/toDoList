import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const getToDos = () => {
  Axios.get('http://localhost:3001/todos')
    .then(res => {
      setTodos(res.data);
      console.log();
    })
    .catch(error => console.log(error));
};

const addToDo = toDo => {
  Axios.post('http://localhost:3001/create', toDo)
    .then(res => {
      console.log(res.data);
      getToDos();
    })
    .catch(error => console.log(error));
};
