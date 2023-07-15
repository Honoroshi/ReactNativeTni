import { View, Text } from 'react-native'
import React from 'react'


const CustomText = ({fname,lname}) => {
    return(
        
            <Text> Your First Name is {fname} ! and Last name is {lname} </Text>
            
    )
}

const MyCustomTextWith = () => {
    return (
      <view style={{alignItems:'center',top:50}}>
  
          <CustomText fname = "Soravich"  lname = "Sermsub"/>
          <CustomText fname = "Sukrit"    lname = "Rerk-u-cote"/>
  
      </view>
    )
  }

export default MyCustomTextWith 