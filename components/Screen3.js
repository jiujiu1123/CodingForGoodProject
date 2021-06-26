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
      <Image source={require("../book.png")} style={{height:0.08*deviceHeight,marginTop:'11%',width:deviceWidth*0.87,resizeMode:'center',marginLeft:'auto'}}/>
 
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,borderRadius:25,padding:15,marginTop:'10%',marginBottom:'10%'}}>Real-World Example: GPS</Text>
   
      <View style={{padding:15}}>
      <Text style={{fontSize:20}}>
      AR can help give directions! Instead of looking a map, augmented reality GPS apps can add virtual arrows to our environment, telling us where to go. Some cars now even come with AR windshields.       </Text>
      </View>
      <Image source={require("../example.png")}  style={{height:0.24*deviceHeight,marginTop:'10%',marginBottom:'10%',width:deviceWidth*0.6,resizeMode:'contain',backgroundColor:'pink',marginRight:'auto',marginLeft:'auto'}}/>

      <Image source={require("../book2.png")}  style={{height:0.08*deviceHeight,marginTop:'auto',width:deviceWidth*0.87,resizeMode:'center',marginRight:'auto'}}/>
  

      </View>
  }