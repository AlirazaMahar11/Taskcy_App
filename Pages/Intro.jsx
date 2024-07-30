/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Intro_Img from '../assets/Image_4.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Intro = (props) => {
 return (
  <View>
   <View>
    <Image source={Intro_Img} style={styles.img} />
   </View>
   <View style={styles.container}>
    <View>
     <Text style={styles.heading01}>Task Management</Text>
    </View>

    <View>
     <Text style={styles.heading02}>Let's create a <Text style={{ color: '#6756FF' }}>space</Text> for your workflows</Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
     <TouchableOpacity onPress={() => props.navigation.navigate('Organized')} style={styles.button}>
      <Text style={styles.button_Text}>
       Skip
      </Text>
     </TouchableOpacity>
       <TouchableOpacity
       onPress={() => props.navigation.navigate('Organized')}
        style={{backgroundColor:'#5c53fc',width:60,height:60,marginTop:30,textAlign:'center',padding:15,borderRadius:30}}>
       <AntDesign style={{color:'#fff',fontSize:30,fontWeight:'400'}} name="arrowright" />
       </TouchableOpacity>
    </View>
   </View>
  </View>
 );
};

export default Intro;

const styles = StyleSheet.create({
 img: {
  width: '100%',
 },
 container: {
  backgroundColor: '#f7f7f7',
  height: '100%',
  textAlign: 'center',
  alignItems: 'center',
 },
 heading01: {
  color: '#6756FF',
  fontSize: 25,
  fontWeight: '500',
  marginRight: '17%',
  marginBottom: 5,
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
