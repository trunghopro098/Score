import { View, Text } from 'react-native'
import React from 'react'

export default function ScoreDetail({route,navgation}) {
  const {number} = route.params;
  return (
    <View>
      <Text>{number}</Text>
    </View>
  )
}