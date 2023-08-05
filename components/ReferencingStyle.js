import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*Referencing Styles : StyleSheet V.2*/ 

const ReferencingStyle = () => {
  return (
    <View style = {styles.container}>
      <Text style = {[styles.title,styles.warning]}>ReferencingStyle</Text>
    </View>
  )
}

export default ReferencingStyle

const styles = StyleSheet.create({
    container : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : 20
    },
    warning : {
        color : 'red'
    }
})