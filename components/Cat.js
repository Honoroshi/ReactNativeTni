import { View, Text } from 'react-native'
import React from 'react'

const getFullName = (fn, sn, tn) => { //first name, second name, third name
    return fn + " " + sn + " " + tn
}

const Cat = () => {
    return (
        <View>
            <Text>Hello, I am {getFullName("Fluffy", "Bell", "Hook")}!</Text>
        </View>
    )
}

export default Cat