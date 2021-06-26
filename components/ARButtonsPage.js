import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import Button from './Button'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen6 from './Screen6'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default function ARButtonsPage ({navigation})
{return <View style={styles.container}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
       
        <View style={styles.viewStyle}>
        <Screen2/>
        </View>
        
        <View style={styles.viewStyle}>
        <Screen3/>
        </View>
        
        <View style={styles.viewStyle}>
        <Screen4/>
        </View>

        <View style={styles.viewStyle}>

        <View style={{marginTop:'auto',marginBottom:'auto'}}>
       
        <Button text="Portal View" change={()=>{navigation.navigate('Beach View')}} c/>
        <Button text="Hunt Smileys" change={ ()=>{ navigation.navigate('Burst Bubble')}} />
        <Button text="Portal Video" change={()=>{navigation.navigate('Surf')}} />
        <Button text="Launch Your Rocket "  change={()=>{navigation.navigate('Rocket Launch')}} />
        <Button text="Meet the Team" change={()=>{navigation.navigate('Meet US')}} />
    
      </View>
      </View>
      
      <View style={styles.viewStyle}>
      <Screen6/>
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
  
  