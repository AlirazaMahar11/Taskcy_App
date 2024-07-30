/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile_icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import Home from '../Pages/Home.jsx';
import { Project } from '../Pages/Project.jsx';
import Chat from '../Pages/Chat.jsx';
import { Profile } from '../Pages/Profile.jsx';
import { View } from 'react-native';
import Create_Add from '../Pages/Create_Add.jsx';
const Tab = createBottomTabNavigator();
const Tab_Navigation = () => {
  return (
        <Tab.Navigator
          screenOptions={
            {
              tabBarHideOnKeyboard:true,
              tabBarShowLabel: false,
              headerShown: false,
            }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={
              {
                tabBarIcon: ({focused}) => (
                  <Icon
                  name="home-outline"
                  size={28}
                  color={focused ? '#756ef3' : 'black'}
                  />
                ),
              }
            }
          />
          <Tab.Screen
            name="Project"
            component={Project}
            options={
              {
                tabBarIcon: ({focused}) => (
                  <Feather
                  name="folder-minus"
                  size={28}
                  color={focused ? '#756ef3' : 'black'}
                  />
                ),
              }
            }
          />
          <Tab.Screen
            name="Create"
            component={Create_Add}
            options={
              {
                tabBarIcon: ({focused}) => (
                  <View style={{backgroundColor:'#756ef3',borderRadius:20,padding:6}}>
                    <AntDesign
                  name={focused ? 'close' : 'plus'}
                  size={28}
                  color={'white'}
                  />
                  </View>
                ),
              }
            }
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={
              {
                tabBarIcon: ({focused}) => (
                  <Icon
                  name="chatbubble-ellipses-outline"
                  size={28}
                  color={focused ? '#756ef3' : 'black'}
                  />
                ),
              }
            }
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={
              {
                tabBarIcon: ({focused}) => (
                  <Profile_icon
                  name="account"
                  size={28}
                  color={focused ? '#756ef3' : 'black'}
                  />
                ),
              }
            }
          />
        </Tab.Navigator>
  );
};

export default Tab_Navigation;
