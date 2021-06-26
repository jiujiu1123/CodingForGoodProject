import React from 'react';
import 'react-native-gesture-handler';
import {  Dimensions} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ARComponent from './components/ARComponent'
import Screen1 from './components/Screen1'
import Main from './components/Main'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

function App(){

return (<NavigationContainer initialRouteName="one">
         <Stack.Navigator headerMode="screen">
         <Stack.Screen  name="Home" component={Screen1}  options={{title:"", headerShown:false}} /> 
         <Stack.Screen name="Main" options={{    headerTintColor: 'black',headerTransparent:true,title:"",headerBackTitleVisible:false}}  component={Main} />  
         <Stack.Screen   name="AR" options={{headerTintColor: 'black',title:"",headerTransparent:true,headerBackTitleVisible:false}} component={ARComponent}/>
         </Stack.Navigator>
        </NavigationContainer>)
       }

export default App;

