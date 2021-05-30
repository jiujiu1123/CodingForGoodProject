/**
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { Header,Button } from 'react-native-elements';
  
export default function Jason(){
    return <Text>"ROCKET LAUNCH..."</Text>
}
*/
/*
 * Instructions : 
 * 1.Comment everything above this and uncomment everything below this header.
 * 2. Add your code's folder to the js folder [For example, the code I developed is under the name "contact" in js folder]
 * 3. Change the require filepath in the arScenes variable to your folder's path
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import {
  ViroARSceneNavigator
} from '@viro-community/react-viro';


var arScenes = {
  'Rocket' : require('../js/Rocket/RocketScene.js'),
}



export default class Jason extends Component {
  constructor() {
    super();

    this.state = {
      ar: arScenes['Rocket']
    }

    this._getARNavigator = this._getARNavigator.bind(this);

  }
  render() {return this._getARNavigator();}
    
  

 

  _getARNavigator() {
    return (<ViroARSceneNavigator
        initialScene={{scene: this.state.ar}} />);
  }

}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = Jason
 