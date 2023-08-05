import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Example_useEffect = () => {
  return (
    <View>
      <Text>Example_useEffect</Text>
    </View>
  )
}

export default Example_useEffect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    post: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#acc'
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBoTtom: 5
    }
})