import React from 'react';
import {Text, View,Image,TouchableOpacity,Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default function Screen1({navigation}){

    return <View style={{ width: deviceWidth, backgroundColor: '#FFFFFF',  flexDirection: 'column'}}>
            <Image PlaceholderContent={"logo"} source={require("../assets/logo.png")} style={{height:0.6*deviceHeight,width:deviceWidth,resizeMode:'contain'}}/>
            <Text style={{color:"#6E9AC7",fontWeight: 'bold',marginLeft:'auto',marginRight:"auto",fontSize:deviceWidth*0.08}}>CODE YOUR CHANCES</Text>
              <View style={{backgroundColor:"#6E9AC7",height:0.4*deviceHeight,marginTop:"10%"}}>
              <Text style={{color:"#FFFFFF",fontSize:22,marginLeft:"auto",marginRight:"auto",marginTop:"10%",marginBottom:"10%"}}> {`<Augmented Reality>`} </Text>
              <TouchableOpacity style={{marginLeft:"auto",marginRight:"auto",padding:10,backgroundColor: "#F38C1D",borderRadius:5}}onPress={() => navigation.navigate('Main')}>
                    <Text style={{fontSize:20,backgroundColor:"#F38C1D",borderRadius:50}}>Let's get started! </Text>
              </TouchableOpacity>
            </View>
          </View>
  }