import React from 'react';
import {
    Text,
    View,
    Image,Dimensions,
  } from 'react-native';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export default function Screen2(){
    return <View>
        <View style={{flexDirection:'row',height:0.035*deviceHeight,marginTop:'10%',marginLeft:deviceWidth*0.2}}>
        <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#00296b',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:1,marginLeft:-deviceWidth*0.05}}>
          </View>
          <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#6E9AC7',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:2,marginLeft:-deviceWidth*0.05}}>
          </View>
          <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#FFC20C',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:3,marginLeft:-deviceWidth*0.05}}>
          </View>
          <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#F38C1D',borderBottomLeftRadius:20,borderTopLeftRadius:20,zIndex:4,marginLeft:-deviceWidth*0.015}}>
          </View>
          </View>
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,marginTop:'14%',borderRadius:25,padding:15}}>AR vs. VR</Text>
      
      <View style={{marginTop:"10%",marginBottom:"10%",padding:15}}>
      <Text style={{fontSize:20}}>
      You might’ve of heard of Virtual Reality, or VR before. VR and AR are pretty similar, but the difference is that VR replaces your vision with a completely new environment, while AR just adds objects to your enviroment.      </Text>
      </View>

      <Image source={require("../arvsvr.jpeg")}  style={{height:0.25*deviceHeight,marginTop:'0%',marginBottom:'5%',width:deviceWidth*0.8,resizeMode:'contain',backgroundColor:'pink',marginRight:'auto',marginLeft:'auto'}}/>

     

      <View style={{flexDirection:'row',height:0.035*deviceHeight,marginTop:'10%',marginRight:deviceWidth*0.18}}>
        <View style={{width:0.24*deviceWidth,marginTop:'5%',backgroundColor:'#00296b',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:4,marginRight:-deviceWidth*0.05}}>
          </View>
          <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#6E9AC7',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:3,marginRight:-deviceWidth*0.05}}>
          </View>
          <View style={{width:0.25*deviceWidth,marginTop:'5%',backgroundColor:'#FFC20C',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:2,marginRight:-deviceWidth*0.05}}>
          </View>
          <View style={{width:0.26*deviceWidth,marginTop:'5%',backgroundColor:'#F38C1D',borderBottomRightRadius:20,borderTopRightRadius:20,zIndex:1,marginRight:-deviceWidth*0.005}}>
          </View>
          </View>
      </View>
  }