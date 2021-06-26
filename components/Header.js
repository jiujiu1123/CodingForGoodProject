import React from 'react';
import {
    Text,
    View,
    Dimensions,
  } from 'react-native';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export  default function Header(params)  {
    return  <View style={{flexDirection:'row',height:0.035*deviceHeight,marginTop:'10%',marginLeft:deviceWidth*0.2}}>
    <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#00296b',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:1,marginLeft:-deviceWidth*0.05}}>
      </View>
      <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#6E9AC7',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:2,marginLeft:-deviceWidth*0.05}}>
      </View>
      <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#FFC20C',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:3,marginLeft:-deviceWidth*0.05}}>
      </View>
      <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#F38C1D',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:4,marginLeft:-deviceWidth*0.015}}>
      </View>
      </View>
}