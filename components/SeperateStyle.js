import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../components/styles'

/*Seperate Styles : StyleSheet V.3*/ 

const SeperateStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.warning]}>SeperateStyle</Text>
    </View>
  )
}

export default SeperateStyle

