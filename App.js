import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import CustomText from './components/CustomText';
import Couter from './components/Couter';
import MyInput from './components/MyInput';
import IncrementCiunter from './components/IncrementCiunter';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <ViewBoxesWithColorAndText/>  */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* <Couter/> */}
      {/* <MyInput/> */}
      <IncrementCiunter/>
      {/* <Form/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15
  }
 })