import 'react-native-gesture-handler';
import { View, Text, Linking } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'; //we will use Navigation
import {createDrawerNavigator} from '@react-navigation/drawer'; //we will use Navigation-Drawer Navigation
import { DrawerContentScrollView,
         DrawerItemList,
         DrawerItem
        } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

import CustomSideBarMenu from './pages/CustomSideBarMenu';

function FirstScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: "#FFCEAD" },
        // headerTintColor: "#025CFF",
        // headerTitleStyle: { fontWeight: "bold" },
        headerShown: false
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

function SecondScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTintColor: "#FFFD9B",
        // headerTitleStyle: { fontWeight: "bold" },
        headerShown: false
      }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#FFE777",
          width: 240,
        },
      }}

      drawerContent={(props)=><CustomSideBarMenu{...props}/>}

    >
      <Drawer.Screen
        name="FirstDrawer"
        component={FirstScreenStack}
        options={{ title: "FirstDrawer", drawerLabel: "First page Option" }}
      />

      <Drawer.Screen
        name="SecondDrawer"
        component={SecondScreenStack}
        options={{ title: "SecondDrawer", drawerLabel: "Second page Option" }}
      />
    </Drawer.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App