/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { StyleSheet, Text, Pressable, TouchableOpacity, Image, View } from 'react-native';
import Angle from 'react-native-vector-icons/AntDesign';
const profiles_img = require('../assets/Small_1.jpg');
const profiles_img1 = require('../assets/Small_2.jpg');
const profiles_img2 = require('../assets/Small.3.jpg');

const Create_Task = () => {
  const handlePress = () => {
    alert('Button Pressed!');
};
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.Text}>
          Task Name
        </Text>
      </View>
      <View style={styles.inProgressItem}>
        <View>
          <Text style={styles.inProgressItemTitle}>Mobile Application Design</Text>
        </View>
      </View>
      <View>
        <Text style={styles.Text1}>
          Team Member
        </Text>
      </View>
      <View style={{padding:10,flexDirection:'row'}}>
        <Image source={profiles_img} style={{width:50,height:50,borderRadius:100,margin:5}} />
        <Image source={profiles_img1} style={{width:50,height:50,borderRadius:100,margin:5}} />
        <Image source={profiles_img2} style={{width:50,height:50,borderRadius:100,margin:5}} />
        <Image source={profiles_img} style={{width:50,height:50,borderRadius:100,margin:5}} />
        <Angle name="pluscircleo" size={50} style={{width:50,height:50,borderRadius:100,margin:5,color:'#6756FF'}} />
      </View>
      <View>
        <Text style={styles.Text1}>
          Date
        </Text>
      </View>
      <View style={styles.inProgressItem}>
        <View>
          <Text style={styles.inProgressItemTitle}>November 01,20</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
       <View>
        <Text style={{color:'gray',fontSize:15,marginVertical:15}}>Start Timing</Text>
        <View style={{borderWidth:0.5,borderColor:'gray',width:150,height:50,borderRadius:12,padding:12}}><Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:15}}>9:30 am</Text></View>
       </View>
       <View style={{marginLeft:20}}>
        <Text style={{color:'gray',fontSize:15,marginVertical:15}}>End Timing</Text>
        <View style={{borderWidth:0.5,borderColor:'gray',width:150,height:50,borderRadius:12,padding:12}}><Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:15}}>3:30 pm</Text></View>
       </View>
      </View>
      <View>
        <Text style={styles.Text2}>
          Board
        </Text>
      </View>
      <View style={styles.buttonsAndIconContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
             Urgent
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Running
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              ongoing
            </Text>
          )}
        </Pressable>
      </View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button1}>
          <Text style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color:'white',
          }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
     </View>
  );
};

export default Create_Task;

const styles = StyleSheet.create({
  main: {
   paddingTop:50,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    height: '100%',
      },
      Text: {
        paddingVertical:10,
        fontSize: 15,
        color: '#777',
      },
      inProgressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#babdc3',
        borderRadius: 15,
        padding: 20,
      },
      inProgressItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
   Text1:{
    paddingTop:10,
    fontSize: 15,
    color: '#777',
   },
   buttonsAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
},
button: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#888',
    backgroundColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
},
buttonText: {
    color: '#444',
    fontSize: 15,
    fontWeight: '600',
},
button1: {
  backgroundColor: '#6756FF',
  padding: 20,
  width: '80%',
  marginTop: 10,
  borderRadius: 20,
},
Text2:{
 marginVertical:15,
  fontSize: 14,
  color: '#777',
 },
});
