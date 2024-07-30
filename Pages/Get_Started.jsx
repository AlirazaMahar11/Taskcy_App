/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
// Image imports
const Home_Img = require('../assets/Home_Img.jpg');

const Get_Started = (props) => {
 return (
  <View>
   <View style={styles.Main}>
   <Image source={Home_Img} style={styles.Img} />
   <View style={styles.Child}>
    <View>
     <Text style={styles.Text_1}>
      Taskey
     </Text>
    </View>
    <View>
     <Text style={styles.Text_2}>Building Better Workplaces</Text>
    </View>
    <View>
     <Text style={styles.Text_3}>Create a unique emotional story that describes better than words</Text>
    </View>
    <View>
     <TouchableOpacity onPress={() => props.navigation.navigate('Intro')} style={styles.Btn}>
      <Text style={styles.Btn_Text} >Get Started</Text>
     </TouchableOpacity>
    </View>
   </View>
  </View>
  </View>
 );
};

const styles = StyleSheet.create({
 Main: {
  width: '100%',
  height: '100%',
  backgroundColor: '#6351ff',
 },
 Img: {
  width: '100%',
  height: '50%',
 },
 Child: {
  height: '50%',
  width: '100%',
  backgroundColor: 'white',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
 },
 Text_1: {
  color: '#7161f8',
  marginTop: 30,
  textAlign: 'center',
  fontSize: 50,
  fontWeight: '900',
  fontFamily: 'serif',
 },
 Text_2: {
  color: '#363543',
  fontSize: 40,
  textAlign: 'center',
  fontWeight: '900',
 },
 Text_3: {
  color: '#686a60',
  textAlign: 'center',
  paddingHorizontal: 50,
  width: '100%',
  marginTop: 15,
 },
 Btn: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
 },
 Btn_Text: {
  backgroundColor: '#7161f8',
  color: '#fff', width: '80%',
  height: '50%',
  textAlign: 'center',
  marginTop: 10,
  padding: 12,
  borderRadius: 20,
  fontSize: 20,
  fontWeight: '900',
 },
});
export default Get_Started;
