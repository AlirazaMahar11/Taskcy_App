/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Intro_Img from '../assets/Image_3.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Organized = (props) => {
  return (
    <View style={{ height: '100%' }}>
      <View style={{ height: '55%' }}>
        <Image source={Intro_Img} style={styles.img} />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.heading01}>Task Management</Text>
        </View>

        <View>
          <Text style={styles.heading02}>Work more <Text style={{ color: '#6756FF' }}>Structured</Text> and Organized👌</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
          onPress={() => props.navigation.navigate('Result')}
           style={styles.button}>
            <Text style={styles.button_Text}>
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => props.navigation.navigate('Result')}
            style={{ backgroundColor: '#5c53fc', width: 60, height: 60, marginTop: 30, textAlign: 'center', padding: 15, borderRadius: 30 }}>
            <AntDesign style={{ color: '#fff', fontSize: 30, fontWeight: '400' }} name="arrowright" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Organized;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: '#f7f7f7',
    height: '50%',
    textAlign: 'center',
    alignItems: 'center',
  },
  heading01: {
    color: '#6756FF',
    fontSize: 25,
    fontWeight: '500',
    marginRight: '17%',
    marginTop: 35,
    marginBottom: 10,
  },
  heading02: {
    color: 'black',
    fontWeight: '400',
    fontSize: 40,
    textAlign: 'left',
    paddingHorizontal: 60,
  },
  button: {
    alignItems: 'flex-start',
    padding: 20,
    width: 300,
    marginTop: '7%',
  },
  button_Text: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
});
