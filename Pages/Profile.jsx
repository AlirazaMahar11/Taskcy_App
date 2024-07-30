/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import Profileimage from '../assets/Man_Image.jpg';
import React from 'react';

export const Profile = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
      <Text onPress={() => props.navigation.goBack()} ><AntDesign style={styles.icon} size={30} name="leftcircleo" /></Text>
        <Text style={styles.head}>Profile</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <View
            style={{
              alignItems: 'center'}}>
            <View style={{ borderWidth: 1, borderRadius: 100, width: 150, height: 150, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={Profileimage} style={{ width: 140, height: 140, borderRadius: 100 }} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 30, fontWeight: 800}}>
                Alvart Anistain
              </Text>
              <Text style={{color: 'black', fontSize: 20}}>
                @albart.anistain
              </Text>
              <TouchableOpacity>
                <Text
                onPress={() => props.navigation.navigate('Edit_Profile')}
                  style={{
                    color: 'black',
                    padding: 8,
                    borderRadius: 5,
                    borderWidth: 1,
                    marginTop: 3,
                    borderColor: '#7161f8',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row', width:'100%',justifyContent:'space-evenly',marginTop:10}}>
        <View style={{alignItems:'center'}}>
          <Icons name="checkbox-outline" style={{color:'black'}} size={20} />
          <Text style={{color:'black'}}>5</Text>
          <Text style={{color:'black'}}>On Going</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Icons name="checkbox-outline" style={{color:'black'}} size={20} />
          <Text style={{color:'black'}}>25</Text>
          <Text style={{color:'black'}}>Total Complete</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.languageText} onPress={() => props.navigation.navigate('Project')} >My Project</Text>
        <AntDesign style={styles.icon} size={15} name="right" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.languageText} onPress={() => props.navigation.navigate('CreateTeam')} >Join a Team</Text>
        <AntDesign style={styles.icon} size={15} name="right" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.languageText} onPress={() => props.navigation.navigate('Setting')} >Setting</Text>
        <AntDesign style={styles.icon} size={15} name="right" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.languageText} onPress={() => props.navigation.navigate('Add Task')} >My Task</Text>
        <AntDesign style={styles.icon} size={15} name="right" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  head: {
    fontSize: 30,
    color: 'black',
    marginLeft: 20,
    left: 65,
  },
  icon: {
    color: 'black',
    top: 3,
  },
  inputContainer: {
    marginTop:7,
    height: 60,
    top: 20,
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
});
