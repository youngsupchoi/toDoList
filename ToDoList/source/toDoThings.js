import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const toDoThings = ({
  setEditIsVisible,
  toDoId,
  setDeleteIsVisible,
  title,
  content,
  author,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {title}-<Text style={{fontWeight: 'bold'}}>{author}</Text>
      </Text>

      <Text style={styles.content}>{content}</Text>

      <View style={styles.icons}>
        <Ionicons
          onPress={() => {
            setDeleteIsVisible({id: toDoId, visible: true});
          }}
          style={[styles.Icon, {backgroundColor: '#DF0101'}]}
          name="trash-sharp"
          size={28}
          color="black"
        />
        <Entypo
          onPress={() => {
            setEditIsVisible(true);
          }}
          style={[styles.Icon, {backgroundColor: '#01A9DB'}]}
          name="pencil"
          size={28}
          color="black"
        />
      </View>
    </View>
  );
};

export default toDoThings;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 130,
    backgroundColor: '#2E2E2E',
    borderRadius: 5,
    paddingHorizontal: 30,
  },
  titleText: {
    color: 'white',
    fontSize: 18,

    marginTop: 20,
  },
  content: {
    color: 'white',
    fontSize: 13,
    marginTop: 10,
  },
  icons: {
    flexDirection: 'row-reverse',
  },
  Icon: {
    color: 'white',
    marginLeft: 10,
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 2,
  },
});
