import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jason from './components/Jason'
import Nihir from './components/Nihir'
import Taylor from './components/Taylor'
import Yash from './components/Yash';
import Swathi from './components/Swathi'

import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Header,Button } from 'react-native-elements';

const Custom=({text="hi",color="#007AFF",borderColor="#cddafd",change=null,style=null})=><TouchableOpacity
style={style?style:{ 
  marginRight:'10%',
  marginLeft:'10%',
  marginTop:'5%',
  marginBottom:'5%',
  width:'80%',
  height:'10%',
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:color,
  borderRadius:4,
  borderWidth: 2,
  borderColor
}}
onPress={change?change:() => alert('hi')}
underlayColor='#000'>
<Text style={styles.loginText}>{text}</Text>
</TouchableOpacity>

const Comp = ({navigation}) => {
  const Buttons=()=> <>
  <Custom text="TAYLOR" change={()=>{navigation.navigate('Taylor')}} />
  <Custom text="YASH" change={()=>{navigation.navigate('Yash')}} color="#4d194d" borderColor="#e5b3fe"/>
  <Custom text="NIHIR" change={()=>{navigation.navigate('Nihir')}} color="#64dfdf" borderColor="#80ffdb"/>
  <Custom text="JASON - ROCKET LAUNCH "  change={()=>{navigation.navigate('Jason')}} color="#f28482" borderColor="#f28482"/>
  <Custom text="SWATHI - MEET US" change={()=>{navigation.navigate('Swathi')}} color="#52b69a" borderColor="#52b69a" />
  </> 
  
  return (<View style={{backgroundColor:"#fdf0d5",marginTop:'85%',height:'100%'}}>
      <ScrollView  contentInsetAdjustmentBehavior="automatic" >
        <View>
        <Buttons/>
        </View>
      </ScrollView>
    </View>
  );
};

const Home=({navigation})=>{
  return  <Custom change={()=>{navigation.navigate('cyc')}} text="VIEW" style={{marginTop:'130%',marginLeft:'35%',padding:'3%',borderRadius:6,width:'30%',height:'5%',backgroundColor:'black'}} color="yellow"/>
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image:{
    height:'300%',
    width:'100%'
  },

loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
}});

const Stack = createStackNavigator();


function App(){
  const [view,setView]=React.useState(false);
  const change=()=>setView(!view);

  return (<NavigationContainer>
        <Stack.Navigator headerMode="screen">
        <Stack.Screen name="home" component={Home} 
          options={{
            title:"",
            headerTransparent: true,
            headerBackground: () => ( 
              <Image source={require('./cyc.png')} resizeMode="stretch" style={{height:'400%',
              width:'100%'}}/>
            ),
          }}/>              
          <Stack.Screen name="cyc" component={Comp} options={{ title:"",
            headerTransparent: true,
            headerBackground: () => ( 
              <Image source={require('./cyc1.png')} resizeMode="stretch" style={{height:'340%',
              width:'100%'}}/>
            ),
          }}/>
                       <Stack.Screen name="Swathi" component={Swathi}/>
                       <Stack.Screen name="Jason" component={Jason} />
                       <Stack.Screen name="Nihir" component={Nihir} />
                       <Stack.Screen name="Taylor" component={Taylor} />
                       <Stack.Screen name="Yash" component={Yash} />
       </Stack.Navigator>
     </NavigationContainer>)

}
export default App;