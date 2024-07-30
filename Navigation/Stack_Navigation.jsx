/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Get_Started from '../Pages/Get_Started';
import Intro from '../Pages/Intro';
import Organized from '../Pages/Organized';
import Signin from '../Pages/Signin';
import Result from '../Pages/Result';
import SignUp from '../Pages/Singup';
import Tab_Navigation from './Tab_Navigation';
import { WorkSpace } from '../Pages/WorkSpace';
import Create_Add from '../Pages/Create_Add';
import CreateTeam from '../Pages/CreateTeam';
import Create_Task from '../Pages/Create_Task';
import { Project } from '../Pages/Project';
import EditProfile from '../Pages/Edit_Profile';
import { Profile } from '../Pages/Profile';
import Setting from '../Pages/Settings';
import Language from '../Pages/Languages';
import { Search } from '../Pages/Search';
const Stack = createNativeStackNavigator();
const Stack_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
              tabBarShowLabel: false,
              headerShown: false,
            }}
            component={Get_Started}
            name="GetStarted" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={Intro}
        name="Intro" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={Organized}
        name="Organized" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={Result}
        name="Result" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={Signin}
        name="Signin" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={SignUp}
        name="SignUp" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={Profile}
        name="Tab_Navigation" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={EditProfile}
        name="Edit_Profile" />
          <Stack.Screen options={{
            tabBarShowLabel: false,
            headerShown: false,
          }}
          component={Tab_Navigation}
          name="Main" />
        <Stack.Screen options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={Create_Add}
        name="CreateAdd" />
        <Stack.Screen options={{
          headerTitleAlign:'center',
        }}
        component={CreateTeam}
        name="CreateTeam" />
        <Stack.Screen options={{
           tabBarShowLabel: false,
           headerShown: false,
        }}
        component={Project}
        name="Project" />
        <Stack.Screen options={{
           tabBarShowLabel: false,
           headerShown: false,
        }}
        component={Setting}
        name="Setting" />
        <Stack.Screen options={{
          //  tabBarShowLabel: false,
          //  headerShown: false,
        }}
        component={Search}
        name="Search" />
        <Stack.Screen options={{
           tabBarShowLabel: false,
           headerShown: false,
        }}
        component={Language}
        name="languages" />
        <Stack.Screen options={{
           tabBarShowLabel: false,
           headerShown: false,
        }}
        component={WorkSpace}
        name="WorkSpace" />
        <Stack.Screen options={{
          headerTitleAlign:'center',
        }}
        component={Create_Task}
        name="Add Task" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;
