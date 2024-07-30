/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Profile from '../assets/Man_Image.jpg';
const EditProfile = (props) => {
 return (
  <View
   style={styles.container}>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{marginTop:22,marginLeft:22}} onPress={() => props.navigation.navigate('Profile')}>
    <Icon style={{ fontSize: 40, textAlign: 'left', color: 'black'}} name="arrow-left" />
    </Text>
    <Text style={styles.heading01}>
     Edit Profile
    </Text>
    <Text onPress={() => props.navigation.navigate('Profile')} style={{ color: 'blue', fontSize: 20, marginTop: '8%', margin: 10}}>
     Save
    </Text>
   </View>
   <View style={styles.form}>
    <View
     style={{
      alignItems: 'center',
     }}>
     <Image
      style={{ width: 200, height: 200 }}
      source={Profile}
     />
    </View>
    <View style={{alignItems:'center'}}>
     <TextInput
      placeholder="  Enter your Name"
      placeholderTextColor={'black'}
      style={styles.Input} />
     <TextInput
      placeholder="  Enter your Email"
      placeholderTextColor={'black'}
      style={styles.Input} />
     <TextInput
      placeholder="  Enter your Username"
      placeholderTextColor={'black'}
      secureTextEntry={true}
      style={styles.Input} />
     <TextInput
      placeholder="  Enter your Number"
      placeholderTextColor={'black'}
      secureTextEntry={true}
      style={styles.Input} />
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
  color: 'black',
 },
 heading01: {
  textAlign: 'center',
  color: 'black',
  fontSize: 30,
  fontWeight: '400',
  marginBottom: 20,
  marginTop: '8%',

 },
 heading02: {
  marginLeft: 30,
  textAlign: 'left',
  color: 'black',
  fontSize: 30,
  fontWeight: '500',
  margin: 9,

 },
 heading03: {
  marginLeft: 30,
  textAlign: 'left',
  color: 'silver',
  fontSize: 22,
  fontWeight: '400',
  margin: 9,

 },
 heading04: {
  marginLeft: 30,
  textAlign: 'center',
  color: 'silver',
  fontSize: 22,
  fontWeight: '400',
  margin: 9,

 },
 form: {
  paddingTop: 30,
 },
 Text: {
  color: 'black',
  fontSize: 40,
  fontWeight: '800',
  textAlign: 'center',
 },
 Input: {
  padding: 20,
  marginTop: 20,
  fontSize: 20,
  margin: 10,
  width: '90%',
  color: 'black',
  borderWidth: 2,
  borderRadius: 20,
  borderColor: 'black',
 },
});
export default EditProfile;
