import React from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  import { Image } from 'react-native-elements';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


export default function Next({scroll,width,image,style}){
   
    return <TouchableOpacity style={{padding:5,...style}} 
          onPress={(e) =>{  scroll.current?.scrollTo({x: width, y: 0, animated: true})}}>
        <Image  source={image} style={{height:deviceHeight*0.05,width:deviceWidth*0.13}}/>
        </TouchableOpacity>  

}
