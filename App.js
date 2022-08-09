import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/startScreen/splash';
import BottomtabScreen from './src/screen/BottomtabScreen';
import ScoreDetail from './src/screen/ScoreDetail';
import Historyscore from './src/screen/historyscore';


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
        <Tab.Screen name='home' component={BottomtabScreen}/>
        <Tab.Screen name='scores' component={ScoreDetail}/>
        <Tab.Screen name='history' component={Historyscore}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
