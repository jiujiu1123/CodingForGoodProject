import React from 'react';
import 'react-native-gesture-handler';
import {  Dimensions} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ARComponent from './components/ARComponent'
import Screen1 from './components/Screen1'
import Main from './components/Main'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

// const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
function App(){

return (
<NavigationContainer initialRouteName="one" tabBarOptions={{
        style: {
            elevation: 0,   // for Android
            shadowOffset: {
                width: 0, height: 0 // for iOS
            },
        }
    }}>
         <Tab.Navigator headerMode="screen" >
         <Tab.Screen  name="Home" component={Screen1}  options={{title:"a", headerShown:false,unmountOnBlur:true, tabBarVisible:false }} unmountOnBlur={true} /> 
         <Tab.Screen name="Main" options={{    headerTintColor: 'black',headerTransparent:true,title:"b",headerBackTitleVisible:false, unmountOnBlur:true, tabBarVisible:false }}  component={Main} unmountOnBlur={true}/>  
         <Tab.Screen  name="AR" options={{headerTintColor: 'black',title:"c",headerTransparent:true,headerBackTitleVisible:false,unmountOnBlur:true, tabBarVisible:false }} component={ARComponent} unmountOnBlur={true}/>
         </Tab.Navigator>
        </NavigationContainer>)
       }

export default App;

