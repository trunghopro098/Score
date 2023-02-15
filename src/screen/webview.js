import { View, Text} from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { URL } from '../../util/constant';

export default function WebviewScreeen() {
  return (
    <WebView source={{ uri: 'https://www.f8bet.love/' }} />
  )
}