import React from 'react';
import {
    Text,
    View,
    Dimensions,
  } from 'react-native';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export default function Footer() {
    return  <View style={{flexDirection:'row',height:0.035*deviceHeight,marginTop:'10%',marginRight:deviceWidth*0.18}}>
    <View style={{width:0.24*deviceWidth,marginTop:'5%',backgroundColor:'#00296b',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:4,marginRight:-deviceWidth*0.05}}>
      </View>
      <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#6E9AC7',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:3,marginRight:-deviceWidth*0.05}}>
      </View>
      <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#FFC20C',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:2,marginRight:-deviceWidth*0.05}}>
      </View>
      <View style={{width:0.26*deviceWidth,marginTop:'5%',backgroundColor:'#F38C1D',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:1,marginRight:-deviceWidth*0.005}}>
      </View>
      </View>
}