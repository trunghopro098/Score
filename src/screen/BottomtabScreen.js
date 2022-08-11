import { View, Text, ImageBackground, StatusBar, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { dataButton } from '../../util/data'
import background1 from '../public/img/background3.jpg'
export default function BottomtabScreen({navigation}) {


    const history = ()=>{
        navigation.navigate('history');
    }
    const columnScore = (number) => {
        navigation.navigate('scores', {number: number})
        console.log("number",number)
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
            paddingHorizontal: 20
            }}
        >
        <Text style={{marginTop: 100,marginBottom:20, fontSize:30, color:'white', fontWeight:'bold',fontStyle:'italic'}}>
            NOTE SCORES HAPPY
        </Text>

        <View style={styles.body}>
            {dataButton.map((item,index)=>{
                return(
                <TouchableOpacity style={styles.btn1} key={item.id} onPress={()=>{columnScore(item.number)}}>
                    <LinearGradient colors={["#ccccff","#cc99ff","#8080ff"]} style={styles.layoutBTN}>
                        <Text style={styles.textButton}>
                            {item.number} column scores
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                )
            })}
            <TouchableOpacity style={styles.btn1} onPress={history}>
                <LinearGradient colors={["#ccccff","#cc99ff","#8080ff"]} style={styles.layoutBTN}>
                    <Text style={styles.textButton}>
                        Scoreboard history
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View> 
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