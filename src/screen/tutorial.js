import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import background1 from '../public/img/background1.jpg'
export default function Tutorial({navigation}) {
  return (
    <ImageBackground
    source={background1}
    style={styles.container}>
      <View style={styles.content}>
       <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Image source={require("../public/img/cancle.png")} 
              style={{
                width: 30,
                height: 30,
                borderRadius:50
              }}
              resizeMode='contain'
            />
        </TouchableOpacity>
        </View>
        <Text style={{color:"red", fontWeight:'bold', fontSize: 20, textAlign:'center', marginTop: 30 }}>
            WELCOME TO NOTE SCORES HAPPY
        </Text>
       <View style={{width: "100%",marginTop: 20}}>
        <Text style={{fontSize: 16, color: 'white'}}>
          NOTE SCORES HAPPY application helps us to manage the score of the players.
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginTop: 5, }}>
          Now we will show you how to use the application:
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginTop: 5, }}>
          1. On the main screen, select add scores.
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginTop: 5, }}>
          2. Enter name player.
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginTop: 5, }}>
          3. The angle left screen to select "ADDSCORES", display the window we enter the score for the player or finish..
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginTop: 5, }}>
          The application allows us to review the history of previous plays.
        </Text>
      </View>
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:"center",
    alignItems:'center'
  },
  content:{
    width: "90%",
    height: "90%",
    backgroundColor:'',
    padding: 20,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  }

})