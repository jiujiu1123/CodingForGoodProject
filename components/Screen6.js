import React from 'react';
import {
    Text,
    View,
    Image,Dimensions,
  } from 'react-native';


  import Header from './Header';
  import Footer from './Footer';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export default function Screen2(){
    return <View>
       <Header/>
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,marginTop:'14%',borderRadius:25,padding:15}}>AR vs. VR</Text>
      
      <View style={{marginTop:"10%",marginBottom:"10%",padding:15}}>
      <Text style={{fontSize:20}}>
      You might’ve of heard of Virtual Reality, or VR before. VR and AR are pretty similar, but the difference is that VR replaces your vision with a completely new environment, while AR just adds objects to your enviroment.      </Text>
      </View>

      <Image source={require("../assets/arvsvr.jpeg")}  style={{height:0.25*deviceHeight,marginTop:'0%',marginBottom:'5%',width:deviceWidth*0.8,resizeMode:'contain',marginRight:'auto',marginLeft:'auto'}}/>
     <Footer/>
      </View>
  }