import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons' ;

function Feed(){
  return(
    <View style = {{flex:1,justifyContent:'center',alignItems: 'center'}}>
      <Text>Feed</Text>
    </View>
  )
}

function Profile(){
  return(
    <View style = {{flex:1,justifyContent:'center',alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  )
}

function Notification(){
  return(
    <View style = {{flex:1,justifyContent:'center',alignItems: 'center'}}>
      <Text>Notification</Text>
    </View>
  )
}


const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
    initialRouteName='Feed'
    activeColor='#e91e63'
    labelStyle= {{fontSize: 12}}
    style = {{backgroundColor: 'tomato'}}>

      <Tab.Screen
        name='Feed'
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color })=>(
            <MaterialCommunityIcons name='home' color= '#ff7f50'  size={30}/>
          )
        }}
      />

      <Tab.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({ color })=>( 
            <MaterialCommunityIcons name='bell' color= '#ff7f50' size={30}/>
          )
        }}
      />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color })=>(
            <MaterialCommunityIcons name='account' color= '#ff7f50' size={30}/>
          )
        }}
      />

    </Tab.Navigator>
      

  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App