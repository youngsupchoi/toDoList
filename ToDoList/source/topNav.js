import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const topNav = ({isVisible, setIsVisible}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>To Do List</Text>
      <Entypo
        onPress={() => {
          setIsVisible(true);
          console.log(isVisible);
        }}
        name="circle-with-plus"
        size={35}
        color="black"
      />
    </View>
  );
};

export default topNav;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,

    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 10,
    zIndex: 100,
  },
  topNav: {},
  headText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
  },
});
