import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/startScreen/splash';
import BottomtabScreen from './src/screen/BottomtabScreen';
import ScoreDetail from './src/screen/ScoreDetail';
import Historyscore from './src/screen/historyscore';
import Tutorial from './src/screen/tutorial';
import WebviewScreeen from './src/screen/webview';


const Tab = createStackNavigator();

const App = () =>{

  return (
    <NavigationContainer>
        <StatusBar 
            backgroundColor="white"
            barStyle="dark-content"
        />
      <Tab.Navigator
        initialRouteName='splash'
        screenOptions={{ headerShown:false}}
      >
        <Tab.Screen name='splash' component={SplashScreen}/>
        <Tab.Screen name='home' component={BottomtabScreen} />
        <Tab.Screen name='tutorial' component={Tutorial}/>
        <Tab.Screen name='gift' component={WebviewScreeen}/>
        <Tab.Screen name='scores' component={ScoreDetail} options={{headerShown:true,headerTitle:"Scores"}}/>
        <Tab.Screen name='history' component={Historyscore} options={{headerShown:true,headerTitle:"Scoreboard history"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
