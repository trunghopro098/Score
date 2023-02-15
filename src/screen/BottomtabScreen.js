import { View, Text, ImageBackground, StatusBar, StyleSheet, Image, Button, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import background1 from '../public/img/background3.jpg'
import { URL } from '../../util/constant'
import firestore from '@react-native-firebase/firestore';

export default function BottomtabScreen({navigation}) {
    const [signalFirbase, setsignalFirbase] = useState({start : false})

    useEffect(() => {
        getSignal()
    }, [])

    const getSignal = async()=>{
        try {
            const response = firestore().collection('scores')
            const data = await response.get();
            data.docs.forEach(item=>{
                setsignalFirbase({...item.data()})
            })
        } catch (error) {
            
        }
    }

    const history = ()=>{
        navigation.navigate('history');
    }
    const columnScore = (number) => {
        navigation.navigate('scores', {number: number})
    }
    const redirect = (screen)=>{
        if(signalFirbase?.start){
            navigation.navigate('gift')
        }else{
            navigation.navigate(screen)
        }
    }
  return (
    <ImageBackground
        source={background1}
        style={styles.container}>
        <StatusBar 
            backgroundColor="#e6ccff"
            barStyle="dark-content"
        />
        <View
            style={{
            flex:1,
            backgroundColor: 'rgba(0,0,0, .7)',
            alignItems:'center',
            paddingHorizontal: 20,
            position  :"relative"
            }}
        >
        <Text style={{marginTop: 70,marginBottom:20, fontSize:30, color:'white', fontWeight:'bold',fontStyle:'italic'}}>
            NOTE SCORES HAPPY
        </Text>

        <View style={styles.body}>
                <TouchableOpacity style={styles.btn1}
                onPress={()=>{
                    redirect('scores')
                }
                    }>
                    <LinearGradient colors={["#ccccff","#cc99ff","#8080ff"]} style={styles.layoutBTN}>
                        <Text style={styles.textButton}>
                            add scores
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1} 
                onPress={()=>{
                    redirect('tutorial')
                   }}>
                    <LinearGradient colors={["#ccccff","#cc99ff","#8080ff"]} style={styles.layoutBTN}>
                        <Text style={styles.textButton}>
                            tutorial
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={()=>{
                redirect('history')
            }}>
                <LinearGradient colors={["#ccccff","#cc99ff","#8080ff"]} style={styles.layoutBTN}>
                    <Text style={styles.textButton}>
                        Scoreboard history
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{...styles.btn1, backgroundColor:'red'}} 
            onPress={
                ()=>{
                    redirect("")
                }
            }>
                <LinearGradient colors={["#ccccff","#cc99ff","#ff6699", "#b3003b"]} style={styles.layoutBTN}>
                    <Text style={styles.textButton}>
                        Receive gift
                    </Text>
                </LinearGradient>
            </TouchableOpacity> */}
        </View> 
        {/* <View style={{
            width: 60,
            height:60,
            position:'absolute',
            zIndex:99,
            bottom : 20,
            right:10
        }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('gift')}}>
                <Image
                    source={require('../assets/gift.gif')}
                    style={{
                    width: 60,
                    height: 60,
                    }}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        </View> */}
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linear:{
        flex:1,
        width: "100%",
        height:"100%",
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    header:{
        width: "100%",
        height: 50,
        backgroundColor:'white',
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 1
        },
        shadowOpacity:.5,
        shadowRadius: 2,
        elevation: 3,
        flexDirection:'row',
        alignItems:'center',
    },
    body:{
        width: "80%",
        height: "70%",
        backgroundColor:'transparent',
        marginTop:10,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn1:{
        width: "80%",
        height: 60,
        borderRadius: 25,
        overflow:'hidden'
    },
    layoutBTN:{
        width: "100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize: 18,
        fontWeight:'bold',
        color:'white'
    }
})