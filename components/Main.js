import React, { useRef } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  Text
} from 'react-native';

import Button from './Button'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import Next from './Next';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


export default function Main ({navigation})
{const scroll = useRef(null);

  
  return <View style={styles.container}>
        <ScrollView ref={scroll} scrollEnabled={false}
 alwaysBounceHorizontal={false} bounces={false} horizontal={true} >
       
        <View style={styles.viewStyle}>
        <Screen2 scroll={scroll} />
        </View>
        
        <View style={styles.viewStyle}>
        <Screen3 scroll={scroll} />
        </View>
        
        <View style={styles.viewStyle}>
        <Screen4 scroll={scroll} />
        </View>

        <View style={styles.viewStyle}>
      <Screen5 scroll={scroll} />
      </View>

        <View style={styles.viewStyle}>

        <View style={{marginTop:'auto',marginBottom:'auto'}}>
       
        <Button text="Portal View" change={()=>{Alert.alert("Clue", "Find the magical portal and try to walk into and out of it");navigation.navigate('AR',{name:"PortalPicture"})}} c/>
        <Button text="Hunt Smileys" change={ ()=>{Alert.alert("Clue", "Look for the smileys and tap on as many as you can"); navigation.navigate('AR',{name:"Bubbles"})}} />
        <Button text="Portal Video" change={()=>{Alert.alert("Clue", "Find the magical portal and try to walk into and out of it"); navigation.navigate('AR',{name:"PortalVideo"})}} />
        <Button text="Launch Your Rocket "  change={()=>{Alert.alert("Clue", "Find and follow the instructions to launch your Rocket");navigation.navigate('AR',{name:"Rocket"})}} />
        <Button text="Meet the Team" change={()=>{Alert.alert("Clue", "Scan the logo on https://www.codeyourchances.com/ to e-meet the team"); navigation.navigate('AR',{name:"Contact"})}} />
   
        <TouchableOpacity style={{marginLeft:"auto",marginRight:"auto",padding:10,backgroundColor: "#F38C1D",borderRadius:5,marginTop:'15%',marginBottom:'5%'}} onPress={(e) =>{  scroll.current?.scrollTo({x: deviceWidth*3, y: 0, animated: true})}}>
                    <Text style={{fontSize:20,backgroundColor:"#F38C1D",borderRadius:50,color:'white'}}> Go back </Text>
              </TouchableOpacity>
 
      </View>
      </View>
      
     
     
      </ScrollView>
      </View>}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5e5e5",
    },
   viewStyle:{
    width: deviceWidth,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column'} 
   });
  
  
