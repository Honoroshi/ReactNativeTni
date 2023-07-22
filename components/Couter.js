import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Couter = () => {

    const[count, setCount] = useState(0); //set state outside return()

  return (
    <View style={styles.container}>
      <Text>{count}</Text>

        <Button 
        title='Click Me'
        onPress={()=>{setCount(count+1)}}/>

    </View>
  )
}

export default Couter

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})