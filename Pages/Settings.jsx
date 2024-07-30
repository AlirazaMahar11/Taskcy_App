/* eslint-disable prettier/prettier */
import Angle from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Setting = (props) => {
 const [isPermissionEnabled, setIsPermissionEnabled] = useState(false);
 const [isPushNotificationEnabled, setIsPushNotificationEnabled] = useState(false);
 const [isDarkModeEnabled, setIsDarkModeEnabled] = useState('white');
 return (
  <View style={styles.main}>
   <View style={styles.headerContainer}>
    <Text onPress={() => props.navigation.goBack()} ><Angle style={styles.icon} size={30} name="leftcircleo" /></Text>
    <Text style={styles.head}>Setting</Text>
   </View>

   <View>
    <View style={styles.inputContainer}>
     <Text style={styles.languageText}>Permission</Text>

     <Switch
      style={styles.switch}
      value={isPermissionEnabled}
      onValueChange={(value) => setIsPermissionEnabled(value)}
     />
    </View>
    <View style={styles.inputContainer}>
     <Text style={styles.languageText}>Push Notification</Text>

     <Switch
      style={styles.switch}
      value={isPushNotificationEnabled}
      onValueChange={(value) => setIsPushNotificationEnabled(value)}
     />
    </View>
    <View style={styles.inputContainer}>
     <Text style={styles.languageText}>Dark Mode</Text>
     <Switch
      style={styles.switch}
      value={isDarkModeEnabled}
      onValueChange={(value) => setIsDarkModeEnabled(value)}
     />
    </View>
   </View>
   <View style={styles.inputContainer}>
    <Text style={styles.languageText} onPress={() => props.navigation.goBack()} >Security</Text>
    <Right style={styles.icon} size={20} name="right" />
   </View>

   <View style={styles.inputContainer}>
    <Text onPress={() => props.navigation.goBack()} style={styles.languageText}>Help</Text>
    <Right style={styles.icon} size={20} name="right" />
   </View>

   <View style={styles.inputContainer}>
    <Text style={styles.languageText} onPress={() => props.navigation.navigate('languages')} >Language</Text>
    <Right style={styles.icon} size={20} name="right" />
   </View>

   <View style={styles.inputContainer}>
    <Text style={styles.languageText} onPress={() => props.navigation.navigate('WorkSpace')} >About Application</Text>
    <Right style={styles.icon} size={20} name="right" />
   </View>
  </View>
 );
};

export default Setting;

const styles = StyleSheet.create({
 main: {
  padding: 30,
  height: '100%',
 },
 headerContainer: {
  top: 20,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 30,
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
  marginBottom: 20,
  height: 70,
  top: 30,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  backgroundColor: '#f9f9f9',
 },
 languageText: {
  fontSize: 18,
  color: 'black',
 },
 radioButton: {
  marginRight: 10,
 },
});
