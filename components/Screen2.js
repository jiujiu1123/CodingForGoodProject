import React from 'react';
import {
    Text,
    View,
    Dimensions,
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
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,marginTop:'14%',borderRadius:25,padding:15}}>What is Augmented Reality?</Text>
      
      <View style={{marginTop:"20%",marginBottom:"20%",padding:15}}>
      <Text style={{fontSize:20}}>
      Augmented reality (AR) adds to what we see in the real world. “Augment” means to add. Using AR, we can put things into the world we see around us. AR is often used with smartphones. AR apps use the phone’s camera to show the actual environment we are in, and add in animations or objects that aren’t really there.
      </Text>
      </View>

     
     

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