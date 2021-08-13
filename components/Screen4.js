import React from 'react';
import {
    Text,
    View,
    Image,Dimensions,
  } from 'react-native';
  import Next from './Next';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export default function Screen4({scroll}){
    return <View>
        <View style={{backgroundColor:"#6E9AC7",height:'5%'}} >
            </View>
      <Image source={require("../assets/top.jpg")} style={{height:0.1*deviceHeight,width:deviceWidth,resizeMode:'cover',marginLeft:'auto'}}/>
 
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,borderRadius:25,padding:15,marginTop:'10%',marginBottom:'10%'}}>Real World Example: Snapchat Filters</Text>
   
      <View style={{padding:15}}>
      <Text style={{fontSize:20,textAlign:'justify'}}>
      Many Snapchat filters actually use augmented reality! AR filters like this one add a virtual mustach and sunglasses to your face.    </Text>
      </View>
      <Image source={require("../assets/sc.jpeg")}  style={{height:0.24*deviceHeight,marginTop:'5%',marginBottom:'5%',width:deviceWidth*0.52,resizeMode:'contain',marginRight:'auto',marginLeft:'auto'}}/>
   
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginBottom:'7%',marginTop:'5%'}}>
      <Next width={deviceWidth} style={{marginLeft:0,marginRight:0}}  image={require(`../assets/leftarrow.png`)} scroll={scroll}/>
      <Next width={deviceWidth*3} style={{marginLeft:0,marginRight:0}} image={require(`../assets/rightarrow.png`)} scroll={scroll}/>
      </View>

      <Image source={require("../assets/bottom.jpg")}  style={{height:0.1*deviceHeight,width:deviceWidth,resizeMode:'cover',marginRight:'auto'}}/>

     

      </View>
  }