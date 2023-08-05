import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View 
    style = {[
      styles.container, {flexDirection:'column'}
    ]}    
    >
      
      {/* <View style={{flex:1, backgroundColor:'red'}}/>
      <View style={{flex:2, backgroundColor:'yellow'}}/>
      <View style={{flex:3, backgroundColor:'blue'}}/> not recommend it divided*/}

      <View style={{flex:1, backgroundColor:'green'}}/>
      <View style={{flex:1, backgroundColor:'purple'}}/>
      <View style={{flex:1, backgroundColor:'pink'}}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1 
  }
})

export default App