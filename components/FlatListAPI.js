import { StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    RefreshControl } from 'react-native'
import React ,{useState,useEffect} from 'react'
//Don't  use 'react-native-web!!'

const FlatListAPI = () => {

  const[refreshing, setRefreshing] = useState(true); //For Refresh loading circle
  
  const[dataSource, setDataSource] = useState([]); //For fetch object API data

  //Service to get the data from the server to render
  const getData = async ()=>{
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((responseJson)=>{
        setDataSource(responseJson);
        setRefreshing(false);
    }).catch((error)=>{
        console.error(error);
    })
  };
  
  /*when you want to call API data with useEffect*/
  useEffect(()=>{
    getData();
  },[]) //Call parameter data with [] just one time!!!
  /*-----------------------------------------------*/

  const getItem = (item) =>{
    //Function for click on an item
    alert('Id : ' + item.id + ' Title : ' +item.title)
  };

  const ItemView = ({item}) => {
    //Function for show 
    return(
        /*show text when click */
        <Text style={styles.item}
        onPress={()=>getItem(item)}> 
        
            {item.title}
        </Text>
    )
  }

  /*Make seperate line*/
  const ItemSeparatorVIew = ()=>{
    return(
        <View 
            style = {{
                height:0.5,
                width:'100%',
                backgroundColor:'#c8c8c8'
            }}
        />
    )
  };
  /*-------------------*/

  /*When we click refresh we clear data*/
  const onRefresh = ()=>{
    //Clear old data of the list
    setDataSource([]);
    //Call the service to get the latest data
    getData();
  }
  /*---------------------------------*/

  return ( //return show on App.js 
    <SafeAreaView style={{flex:1}}>
        <View style = {styles.container}>
            {refreshing? <ActivityIndicator /> : null} 
            <FlatList 
             data={dataSource}
             keyExtractor={(index) => index.toString()}
             ItemSeparatorComponent={ItemSeparatorVIew}
             renderItem={ItemView}
             refreshControl={
                <RefreshControl 
                 refreshing = {refreshing}
                 onRefresh = {onRefresh}
                />
             }
            
            />
        </View>
    </SafeAreaView>
  )
}

export default FlatListAPI

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10
    },
    itemStyle: {
        fontSize: 20,
        padding: 10
    }
})