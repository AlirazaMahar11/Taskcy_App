/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, Pressable, TouchableOpacity, Image, Text, View } from 'react-native';
import Angle from 'react-native-vector-icons/AntDesign';
const profiles_img = require('../assets/Small_1.jpg');
const profiles_img1 = require('../assets/Small_2.jpg');
const profiles_img2 = require('../assets/Small.3.jpg');
const CreateTeam = () => {
  const handlePress = () => {
    alert('Button Pressed!');
};
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <Angle style={styles.icon} size={30} name="leftcircleo" />
        <Text style={styles.head}>Create Team</Text>
      </View>
      <View>
        <Image source={require('../assets/Task_Img.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.Text}>
          Team Name
        </Text>
      </View>
      <View style={styles.inProgressItem}>
        <View>
          <Text style={styles.inProgressItemTitle}>Team Align</Text>
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
        <Text style={styles.Text2}>
          Types
        </Text>
      </View>
      <View style={styles.buttonsAndIconContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Private
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Public
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Secret
            </Text>
          )}
        </Pressable>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
        <TouchableOpacity style={styles.button1}>
          <Text style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color:'white',
          }}>
            Create Team
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%',
    justifyContent:'center',
  },
  img: {
    width: '100%',
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
  Text: {
    fontSize: 14,
    color: '#777',
  },
  Text1: {
    paddingTop: 30,
    fontSize: 14,
    color: '#777',
  },
  Text2: {
    paddingTop: 10,
    fontSize: 14,
    color: '#777',
  },
  buttonsAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
},
button: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#888',
    backgroundColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
},
buttonText: {
    color: '#444',
    fontSize: 15,
    fontWeight: '600',
},
button1: {
  backgroundColor: '#6756FF',
  padding: 15,
  width: '80%',
  marginTop: 10,
  borderRadius: 20,
},
});
