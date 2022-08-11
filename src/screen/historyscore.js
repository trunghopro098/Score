import { View, Text, SafeAreaView, StatusBar, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Historyscore({navigation}) {
    const [dataLocal, setDatalocal] = useState([])

    useEffect(()=>{
        navigation.setOptions({
          headerLeft: () => (
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              title="Back"
            />
          ),
          headerRight:null
        });
      })

      useEffect(() => {
        getData()
    
      }, [])
      const getData = async()=>{
        let arr = [];
        // await AsyncStorage.removeItem("DATA")
        const getData = await AsyncStorage.getItem('DATA');
        console.log("databe", getData)
        if(getData !== null){ 
          console.log(getData, "cfsdds")
            arr = JSON.parse(getData);
            setDatalocal(arr)
        }else{
          setDatalocal([])
        }
      }
      
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar 
            backgroundColor="white"
            barStyle="dark-content"
        />
        {
            dataLocal?.length > 0 ?
            <ScrollView>
                <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
                    {dataLocal.map((value,index)=>{
                        return(
                            <View  key={index}
                                style={{
                                    width: "95%",
                                    height: 70,
                                    shadowColor:'#000',
                                    shadowOffset:{width: 1, height: 2},
                                    shadowOpacity:.6,
                                    shadowRadius:5,
                                    elevation: 2,
                                    backgroundColor:'white',
                                    marginTop: 10,
                                    borderRadius: 8,
                                    padding: 5,
                                    flexDirection:'row', 
                                    justifyContent:'space-around',
                                    alignItems:'center'

                            }}>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color: 'red', fontSize: 16}}>Date</Text>
                                    <Text>{value.date}</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color: 'red', fontSize: 16}}>{value.name1}</Text>
                                    <Text>{value.s1}</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color: 'red', fontSize: 16}}>{value.name2}</Text>
                                    <Text>{value.s2}</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color: 'red', fontSize: 16}}>{value.name3}</Text>
                                    <Text>{value.s3}</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color: 'red', fontSize: 16}}>{value.name4}</Text>
                                    <Text>{value.s4}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>:
            <View style={{flex: 1, flexDirection: "column", justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize : 18, fontWeight: "bold"}}>No history found!!!</Text>
            </View>
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    body:{

    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        height: 50,
        width:'100%',
        backgroundColor:'white',
        shadowColor:'#000',
        shadowOffset:{
            width: 1,
            height: 2
        },
        shadowOpacity:.5,
        shadowRadius: 3,
        elevation: 5,
        padding: 4
    }
})