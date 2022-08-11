import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'

export default function Tutorial({navigation}) {

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
  return (
    <View>
      <Text>tutorial</Text>
    </View>
  )
}