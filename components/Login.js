import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 

  const checkTextInput = () => {

    //Check for the Name TextInput
    if (!email.trim() & !name.trim()){
      alert('Please Enter Name and Email');
      return;
    }
    //Check for the Email TextInput
    else if (!name.trim()){
      alert('Please Enter Name');
      return;
    }
    //Check for the Email & Text TextInput
    else if (!email.trim()){
      alert('Please Enter Email');
      return;
    }
    else{
      alert('Success');
      return;
    }

  }

  return (
    <View style = {styles.container}>
      <TextInput
      placeholder = 'Enter Name'
      style = {styles.textInputStyle}
      value = {name}
      onChangeText={(value)=>{setName(value)}}
      />
      <Text>{'\n\n'}</Text>
    <TextInput
      placeholder = 'Enter Email'
      style = {styles.textInputStyle}
      value = {email}
      onChangeText={(value)=>{setEmail(value)}}
    />
    <Text>{'\n\n'}</Text>
    <Button
        title='SUBMIT'
        onPress={()=>{checkTextInput()}}
        />   
    </View>
  )
  
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle: {
        width: 500,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    }
})