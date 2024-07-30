/* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Create_img = require('../assets/Create_Add_img.jpg');

const Create_Add = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Create_img} style={styles.image} />
        <BlurView
          style={styles.blurView}
          blurType="#bebebf"
          blurAmount={2}
          reducedTransparencyFallbackColor="white"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.languageText} onPress={() => props.navigation.navigate('Add Task')}
          ><Feather name={'edit'} color={'black'} size={20}/>  Create Task</Text>
          <AntDesign style={styles.icon} size={15} name="right" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.languageText} onPress={() => props.navigation.navigate('Project')} ><Feather name={'plus-square'} color={'black'} size={20} />  Create Project</Text>
          <AntDesign style={styles.icon} size={15} name="right" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.languageText} onPress={() => props.navigation.navigate('CreateTeam')} ><Feather name={'users'} color={'black'} size={20} />  Create Team</Text>
          <AntDesign style={styles.icon} size={15} name="right" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.languageText} onPress={() => props.navigation.navigate('Search')} >
          <Feather name={'clock'} color={'black'} size={20} />  Create Event</Text>
          <AntDesign style={styles.icon} size={15} name="right" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  blurView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:'white',
  },
  inputContainer: {
    marginTop: 7,
    height: 60,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 8,
    backgroundColor: '#f9f9f9',
  },
  languageText: {
    fontSize: 18,
    color: 'black',
  },
  icon: {
    color: 'black',
  },
});

export default Create_Add;
