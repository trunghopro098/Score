import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

export default function Historyscore() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar 
            backgroundColor="white"
            barStyle="dark-content"
        />
      <View style={styles.header}>
        <Text>csdds</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start'
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