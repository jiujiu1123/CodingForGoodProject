import React from 'react';
import {
    Text,
    View,
    Image,Dimensions,
  } from 'react-native';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export default function Screen3(){
    return <View>
        <View style={{backgroundColor:"#6E9AC7",height:'5%'}} >
            </View>
      <Image source={require("../top.jpg")} style={{height:0.1*deviceHeight,width:deviceWidth,resizeMode:'cover',marginLeft:'auto'}}/>
 
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,borderRadius:25,padding:15,marginTop:'10%',marginBottom:'10%'}}>Real World Example: Snapchat Filters</Text>
   
      <View style={{padding:15}}>
      <Text style={{fontSize:20}}>
      Many Snapchat filters actually use augmented reality! AR filters like this one add a virtual mustach and sunglasses to your face.    </Text>
      </View>
      <Image source={require("../sc.jpeg")}  style={{height:0.24*deviceHeight,marginTop:'10%',marginBottom:'10%',width:deviceWidth*0.52,resizeMode:'contain',backgroundColor:'pink',marginRight:'auto',marginLeft:'auto'}}/>

      <Image source={require("../bottom.jpg")}  style={{height:0.1*deviceHeight,marginTop:'auto',width:deviceWidth,resizeMode:'cover',marginRight:'auto',marginTop:'11%'}}/>
      <View style={{backgroundColor:"#6E9AC7",height:'10%'}} >
            </View>

      </View>
  }