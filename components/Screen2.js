import React from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity
  } from 'react-native';

  import Header from './Header';
  import Footer from './Footer';
  import Next from './Next';

  var deviceWidth = Dimensions.get('window').width;
  var deviceHeight = Dimensions.get('window').height;

export default function Screen2({scroll,a}){
    return <View>
       <Header/>
      <Text style={{borderWidth:2,borderColor:'black',color:'black',marginLeft:'auto',marginRight:'auto',fontSize:24,marginTop:'14%',borderRadius:25,padding:15}}>What is Augmented Reality?</Text>
      
      <View style={{marginTop:"20%",marginBottom:"20%",padding:15}}>
      <Text style={{fontSize:20,textAlign:'justify'}}>
      Augmented reality (AR) adds to what we see in the real world. “Augment” means to add. Using AR, we can put things into the world we see around us. AR is often used with smartphones. AR apps use the phone’s camera to show the actual environment we are in, and add in animations or objects that aren’t really there.
      </Text>
      </View>
      
      <Next width={deviceWidth} style={{marginBottom:'10%',marginLeft:'auto',marginRight:'auto'}} image={require(`../assets/rightarrow.png`)} scroll={scroll}/>

      <Footer/>
      </View>
  }