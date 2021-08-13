import React from 'react';
import {
    Text,
    View,
    Dimensions,
  } from 'react-native';
  import { Image } from 'react-native-elements';
  import Next from './Next';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;
  
export default function Screen3({scroll}){
    return <View>
      <Image  source={require("../assets/book.png")} style={{height:0.08*deviceHeight,marginTop:'11%',width:deviceWidth*0.87,resizeMode:'center',marginLeft:deviceWidth*0.15}}/>
 
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,borderRadius:25,padding:15,marginTop:'6%',marginBottom:'10%'}}>Real-World Example: GPS</Text>
   
      <View style={{padding:15}}>
      <Text style={{fontSize:20,textAlign:'justify'}}>
      AR can help give directions! Instead of looking a map, augmented reality GPS apps can add virtual arrows to our environment, telling us where to go. Some cars now even come with AR windshields.       </Text>
      </View>
      <Image source={require("../assets/example.png")} style={{height:0.24*deviceHeight,marginTop:'5%',marginBottom:'5%',width:deviceWidth*0.6,resizeMode:'contain',marginRight:deviceWidth*0.2,marginLeft:deviceWidth*0.2}}/>
      
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginBottom:'7%',marginTop:'7%'}}>
      <Next deviceWidth={deviceWidth} style={{marginLeft:0,marginRight:0}}  image={require(`../assets/leftarrow.png`)}scroll={scroll}/>
      <Next width={deviceWidth*2} style={{marginLeft:0,marginRight:0}} image={require(`../assets/rightarrow.png`)} scroll={scroll}/>
      </View>
      <Image source={require("../assets/book2.png")}  style={{height:0.08*deviceHeight,marginTop:'auto',width:deviceWidth*0.87,resizeMode:'center',marginRight:'auto'}}/>


      </View>
  }