import React from 'react';
import {Text,TouchableOpacity,Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default function Button({text,change}){
return <TouchableOpacity
style={{
  marginRight:'auto',
  marginLeft:'auto',
  marginBottom:'6%',
  marginTop:'6%',
  width:deviceWidth*0.84,
  height:deviceHeight*0.07,
  padding:10,
  backgroundColor:"#FFC20C",
  borderRadius:30,
  shadowColor: 'grey',
    shadowOffset: { width: 4, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 10,  
    elevation: 5
}}
onPress={change}
underlayColor='#000'>
<Text style={{color:'white',fontWeight:'bold',fontSize:18,marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}>{text}</Text>
</TouchableOpacity>
}