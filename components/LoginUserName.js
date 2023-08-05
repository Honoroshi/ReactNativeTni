import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'

const LoginUserName = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
  
    const checkTextInput = () => {
  
      //Check for the Name TextInput
      if (!email.trim() & !password.trim()){
        alert('Please Enter Email and Password');
        return;
      }
      //Check for the Email TextInput
      else if (!email.trim()){
        alert('Please Enter Email');
        return;
      }
      //Check for the Email & Text TextInput
      else if (!password.trim()){
        alert('Please Enter Password');
        return;
      }
      else{
        alert('Email : ' + email + '\n' + 'Password : ' + password);
        return;
      }
  
    }
  
    return (
      <View style = {styles.container}>
        <TextInput 
        placeholder = 'Email'
        style = {styles.input}
        value = {email}
        onChangeText={(value)=>{setEmail(value)}}
        />
        <Text>{'\n\n'}</Text>
      <TextInput
        placeholder = 'Password'
        style = {styles.input}
        value = {password}
        onChangeText={(value)=>{setPassword(value)}}
      />
      <Text>{'\n\n'}</Text>
      <Button
          style = {styles.submitButton}
          title='SUBMIT'
          onPress={()=>{checkTextInput()}}
          />   
      </View>
    )
    
  }
  
  export default LoginUserName

const styles = StyleSheet.create({
    container:{
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})