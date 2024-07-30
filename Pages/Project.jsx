/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';
import Bar from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
const Small_1 = require('../assets/Small_1.jpg');
const Small_2 = require('../assets/Small_2.jpg');

export const Project = (props) => {
  const handlePress = () => {
    alert('Button Pressed!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text onPress={() => props.navigation.goBack()}><Angle style={styles.icon} size={40} name="leftcircleo" /></Text>
        <Text style={styles.head}>Projects</Text>
        <Icon style={styles.icon} size={40} name="pluscircleo" />
      </View>

      <View style={styles.searchContainer}>
        <Bar name="search" size={30} color="grey" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonsAndIconContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Favourites
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              Recents
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { opacity: 0.7 }]}>
              All
            </Text>
          )}
        </Pressable>
        <Entypo style={styles.gridIcon} size={30} name="grid" />
      </View>
      {/* Profile Card_1 */}
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
      {/* Cards end */}
      {/* Profile Card_2 */}
      <View style={styles.Card_Contain}>
        <View style={styles.inProgressItem}>
          <View>
            <Text style={styles.inProgressItemTitle}>Unity Dashboard😳</Text>
            <Text style={styles.inProgressItemSubtitle}>Create Detail Booking</Text>
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
      {/* Cards end */}
      {/* Profile Card_3 */}
      <View style={styles.Card_Contain}>
        <View style={styles.inProgressItem}>
          <View>
            <Text style={styles.inProgressItemTitle}>Unity Dashboard😳</Text>
            <Text style={styles.inProgressItemSubtitle}>Create Detail Booking</Text>
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
      {/* Cards end */}
      {/* Profile Card_4 */}
      <View style={styles.Card_Contain}>
        <View style={styles.inProgressItem}>
          <View>
            <Text style={styles.inProgressItemTitle}>Unity Dashboard😳</Text>
            <Text style={styles.inProgressItemSubtitle}>Create Detail Booking</Text>
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
      {/* Cards end */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  head: {
    fontSize: 28,
    color: '#444',
    fontWeight: 'bold',
  },
  icon: {
    color: '#444',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#444',
    padding: 8,
  },
  buttonsAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#444',
    fontSize: 11,
    fontWeight: '600',
  },
  gridIcon: {
    color: '#444',
    marginLeft: 10,
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
