import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { dataButton } from '../../util/data'
export default function BottomtabScreen({navigation}) {


    const history = ()=>{
        navigation.navigate('history');
    }
    const columnScore = (number) => {
        navigation.navigate('scores', {number: number})
        console.log("number",number)
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar 
            backgroundColor="#e6ccff"
            barStyle="dark-content"
        />
        <LinearGradient colors={["#e6ccff","#cc99ff","#6600cc"]}
        style={styles.linear}
        >
        {/* <View style={styles.header}>
            <Image
                source={require("../public/img/logo.png")}
                resizeMode="contain"
                style={{width: 50, height: 50}}
            />
            <Text style={{fontSize: 17, fontWeight:'bold', color: "red"}}>SCORES</Text>
        </View> */}
        <Text style={{marginTop: 60, fontSize:20, color:' #9900cc', fontWeight:'bold'}}>
            CHOOSE SCORES CARD
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
        </LinearGradient>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
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
        alignItems:'center'
    },
    body:{
        width: "80%",
        height: "70%",
        backgroundColor:'transparent',
        borderWidth: 2,
        borderColor:'red',
        marginTop:10,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn1:{
        width: "80%",
        height: 40,
        borderRadius: 20,
    },
    layoutBTN:{
        width: "100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize: 16,
        fontWeight:'bold',
        color:'white'
    }
})