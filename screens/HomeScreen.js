import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({route,navigation}) => {
    const {itemId} = route.params;

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Home Screen {'\n'}</Text>
          <Text>Intital param : itemId - {itemId}{'\n'}</Text>
          <Button
            title='Go to Details'
            onPress={()=>navigation.navigate('Details')}
            />
          <Button
            title='Update Params'
            onPress={()=>navigation.setParams({
                itemId: Math.floor(Math.random()*100)
            })}
            />
        </View>
    )
}

export default HomeScreen