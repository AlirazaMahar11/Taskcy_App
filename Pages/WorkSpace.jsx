/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const Profile = require('../assets/Man_Image.jpg');
export const WorkSpace = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text onPress={() => props.navigation.goBack()}  >
        <Entypo
          style={{ fontSize: 30, marginLeft: 10, marginTop: 10, textAlign: 'left', color: 'black' }}
          name="cross"
        />
        </Text>
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ borderWidth: 1, borderRadius: 100, width: 190, height: 190, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={Profile} style={{ width: 180, height: 180, borderRadius: 100 }} />
            </View>
            <Text style={{ color: 'black', fontSize: 25, fontWeight: 800 }}>
              User Name
            </Text>
            <Text style={{ color: 'black', fontSize: 17 }}>
              abc@abc.gmail.com
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  padding: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                  marginTop: 3,
                  borderColor: 'black',
                  textAlign: 'center',
                  alignItems: 'center',
                }} onPress={() => props.navigation.navigate('Profile')} >
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '95%' }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#002055',
              marginLeft: 20,
            }}>
            WorkSpace
          </Text>
          <View style={styles.Input}>
            <Text style={{ color: '#002055', fontSize: 24, fontWeight: 700, width: '80%' }}>
              UI Design
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  padding: 10,
                  color: '#756EF3',
                  borderRadius: 5,
                  borderWidth: 1,
                  marginTop: 3,
                  borderColor: '#756EF3',
                  textAlign: 'center',
                  alignItems: 'center',
                }}>
                Invite
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: '#002055',
                  marginLeft: 20,
                }}>
                Manage
              </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.Input2}>
                  <Text style={{ color: 'black', fontSize: 18, fontWeight: 700 }}>
                    Team
                  </Text>
                  <Text style={{ color: 'black' }}>8</Text>
                </View>
                <View style={styles.Input2}>
                  <Text style={{ color: '#002055', fontSize: 18, fontWeight: 700 }}>
                    Label
                  </Text>
                  <Text style={{ color: '#002055' }}>4</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.Input2}>
                  <Text style={{ color: '#002055', fontSize: 18, fontWeight: 700 }}>
                    Task
                  </Text>
                  <Text style={{ color: '#002055' }}>8</Text>
                </View>
                <View style={styles.Input2}>
                  <Text style={{ color: 'black', fontSize: 18, fontWeight: 700 }}>
                    Member
                  </Text>
                  <Text style={{ color: '#002055' }}>7</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.Btn}>
              <Text style={styles.Btn_Text} onPress={() => props.navigation.navigate('GetStarted')} >Log Out</Text>
            </TouchableOpacity>
          </View>
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
    color: '#002055',
  },
  Input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    margin: 10,
    width: '100%',
    borderWidth: 0.3,
    borderRadius: 20,
    borderColor: '#002055',
  },
  Input2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 8,
    fontSize: 20,
    marginLeft: 10,
    width: '50%',
    borderWidth: 0.3,
    borderRadius: 20,
    borderColor: '#002055',
  },
  Btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   },
  Btn_Text: {
    backgroundColor: '#7161f8',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
    marginLeft:20,
    padding: 14,
    borderRadius: 12,
    fontSize: 20,
    fontWeight: '900',
   },
});
