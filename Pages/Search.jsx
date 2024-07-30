/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Pressable, Text, TextInput, View, Image } from 'react-native';
import React from 'react';
import Bar from 'react-native-vector-icons/Feather';
const Small_1 = require('../assets/Small_1.jpg');
const Small_2 = require('../assets/Small_2.jpg');

export const Search = () => {
  const handlePress = () => {
    // eslint-disable-next-line no-alert
    alert('Button Pressed!');
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
      </View>

      <View style={styles.searchContainer}>
        <Bar name="search" size={24} color="grey" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Tasks
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              File
            </Text>
          )}
        </Pressable>
      </View>
      <View style={styles.Card_Contain}>
        <View style={styles.inProgressItem}>
          <View>
            <Text style={styles.inProgressItemTitle}>Unity Dashboard😳</Text>
            <Text style={styles.inProgressItemSubtitle}>Design</Text>
            <View style={styles.progress}>
              <View style={styles.profile}>
                <Image
                  source={Small_1}
                  style={styles.profileImage} />
                <Image
                  source={Small_2}
                  style={styles.profileImage}
                />
              </View>
              <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <View style={styles.progressBar} />
              </View>
            </View>
          </View>
          <View style={styles.inProgressItemProgress}>
            <Text style={styles.inProgressItemProgressText}>10/20</Text>
          </View>
        </View>
      </View>
      <View style={styles.Card_Contain}>
        <View style={styles.inProgressItem}>
          <View>
            <Text style={styles.inProgressItemTitle}>Unity Dashboard😳</Text>
            <Text style={styles.inProgressItemSubtitle}>Design</Text>
            <View style={styles.progress}>
              <View style={styles.profile}>
                <Image
                  source={Small_1}
                  style={styles.profileImage} />
                <Image
                  source={Small_2}
                  style={styles.profileImage}
                />
              </View>
              <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <View style={styles.progressBar} />
              </View>
            </View>
          </View>
          <View style={styles.inProgressItemProgress}>
            <Text style={styles.inProgressItemProgressText}>10/20</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 20,
    height: '100%',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 0.4,
    borderColor: 'black',
    backgroundColor: '#f9f9f9',
    paddingVertical: 5,
    borderRadius: 30,
    width: 100,
    alignItems: 'center',
    marginLeft:10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  Card_Contain: {
   marginTop:12,
 },
 profile: {
   flexDirection: 'row',
 },
 profileImage: {
   width: 40,
   height: 40,
   borderRadius: 20,
 },
 progress: {
   marginTop: 4,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
 },
 progressBar: {
   backgroundColor: '#b0d97f',
   height: 8,
   width: '100%',
   borderRadius: 5,
 },
 inProgressItem: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderWidth: 1,
   borderColor: '#babdc3',
   borderRadius: 15,
   padding: 10,
 },
 inProgressItemTitle: {
   fontSize: 16,
   fontWeight: 'bold',
   color: '#000',
 },
 inProgressItemSubtitle: {
   fontSize: 14,
   color: '#777',
 },
 inProgressItemProgress: {
   borderWidth: 1,
   borderColor: '#b0d97f',
   borderRadius: 20,
   paddingHorizontal: 10,
   paddingVertical: 4,
   flexDirection: 'row',
 },
 inProgressItemProgressText: {
   fontSize: 14,
   color: '#000',
 },
});
