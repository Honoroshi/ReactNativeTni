import { Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const IncrementCiunter = () => {

    const [age,setAge] = useState(23); //build state

    const increment = ()=> { //Build function
        setAge(a => a + 1);
    }

  return (
    <View>
        <Text style={{fontSize:24,fontStyle:'bold'}}>
            Your age: {age}
        </Text> 

        <Text>{'\n\n'}</Text>
        <Text>{'\n\n'}</Text>

        <Button 
        title='+3'
        onPress={()=>{increment(setAge(a => a + 2))}}/>

        <Text>{'\n\n'}</Text>
        <Text>{'\n\n'}</Text>

        <Button 
        title='+1'
        onPress={()=>{increment()}}/>

    </View>
  )

}

export default IncrementCiunter
