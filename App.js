import React from 'react';
import 'react-native-gesture-handler';
import {  Dimensions} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Jason from './components/Jason'
import Nihir from './components/Nihir'
import Taylor from './components/Taylor'
import Yash from './components/Yash';
//import Swathi from './components/Swathi'
import Screen1 from './components/Screen1'
import ARButtonsPage from './components/ARButtonsPage'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

function App(){

return (<NavigationContainer initialRouteName="one">
         <Stack.Navigator headerMode="screen">
         <Stack.Screen  name="one" component={Screen1}  options={{title:"", headerShown:false}} /> 
         <Stack.Screen name="two" component={ARButtonsPage} options={{headerShown:false,title:""}} />  
         <Stack.Screen options={{title:"",headerTransparent:true,headerBackTitleVisible:false}}  name="Meet US" component={Jason}/>
         <Stack.Screen options={{title:"",headerTransparent:true,headerBackTitleVisible:false}} name="Rocket Launch" component={Jason} />
         <Stack.Screen options={{title:"",headerTransparent:true,headerBackTitleVisible:false}} name="Surf" component={Nihir} />
         <Stack.Screen options={{title:"",headerTransparent:true,headerBackTitleVisible:false}} name="Beach View" component={Taylor} />
         <Stack.Screen options={{title:"",headerTransparent:true,headerBackTitleVisible:false}} name="Burst Bubble" component={Yash} />
         </Stack.Navigator>
        </NavigationContainer>)
       }

export default App;

