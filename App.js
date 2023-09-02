import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native' // For calling other navigation and switching other page
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

//  function HomeScreen({navigation}) { /*Build Function*/ 
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title='Go to Details'
//         onPress={()=>navigation.navigate('Details')}
//         />
//     </View>
//   )
// }

// function DetailsScreen() {
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Text>Detail Screen</Text>
//     </View>
//   )
// }

const stack = createNativeStackNavigator(); //The way easy use stack library in return()

const App = () => {
  return (
    <NavigationContainer>

      <stack.Navigator initialRouteName='Home' 
        screenOptions={{
        headerStyle : {backgroundColor: '#008b8b'},
        headerTintColor:'#ffff',
        headerTitleStyle:{fontWeight:'bold'}}}
      > 

      {/* <stack.Navigator initialRouteName='FirstPage'> */}

        <stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview '}}/> 
        <stack.Screen name='Details' component={DetailsScreen}/> 

        {/* <stack.Screen name='Pagename' component={functionName}/> options={{title: 'EditHeaderName'}}*/}

      </stack.Navigator>

    </NavigationContainer>
  )
} 


export default App