import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*Inline Styles : StyleSheet V.1*/

const DefineStyle = () => {
  return (
    <View style = {{flex : 1, justifyContent:'center'}}>
      <Text style={{ fontSize:40, color:'blue' }}>Hello World</Text>
    </View>
  )
}

export default DefineStyle

const styles = StyleSheet.create({})