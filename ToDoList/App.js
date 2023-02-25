import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainPage from './source/mainPage';

const App = () => {
  return (
    <View>
      <MainPage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8ff',
  },
  topNav: {},
  headText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
