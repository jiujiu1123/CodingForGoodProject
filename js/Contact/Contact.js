'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from '@viro-community/react-viro';

var list=[
  {
    name:"Dominique Roberts",
    email:"dominique@codeyourchances.com",
    image:require("./res/Dominique_Roberts.webp"),
    animation:'animateImage'
  },
  {
    name:"Gabrielle Roberts",
    email:"ella@codeyourchances.com",
    image:require("./res/image2.webp"),
    animation:'animateImage2'
  },
  {
    name:"Andrew Spatafora",
    email:"andrew@codyourchances.com",
    image:require("./res/image3.webp"),
    animation:'animateImage3'
  },
  {
    name:"Chelsea Celistan",
    email:"chelsea@codeyourchances.com",
    image:require("./res/image4.webp"),
    animation:'animateImage4'
  },
  {
    name:"Madhavi Ramakrishnan",
    email:"madhavi@codeyourchances.com",
    image:require("./res/image5.webp"),
    animation:'animateImage5'
  },
  {
    name:"Nimisha Sara Philip",
    image:require("./res/image6.webp"),
    animation:'animateImage6'
  },
  {
    name:"Peter Zhong",
    image:require("./res/image7.webp"),
    animation:'animateImage7'
  },
  {
    name:"Carina Ramos",
    image:require("./res/image8.webp"),
    animation:'animateImage8'
  },
  {
    name:"Alberta Yoo",
    image:require("./res/image9.webp"),
    animation:'animateImage9'
  },
  {
    name:"Chetan Popli",
    image:require("./res/image10.webp"),
    animation:'animateImage10'
  },
  {
    name:"Ashvika Venkatesan",
    image:require("./res/image11.webp"),
    animation:'animateImage11'
  },
  {
    name:"Afreen Akthar",
    image:require("./res/image12.webp"),
    animation:'animateImage12'
  },
  {
    name:"Braden Kobeski",
    image:require("./res/image13.webp"),
    animation:'animateImage13'
  },
  {
    name:" Parmis Mokhtari-Dizaji",
    image:require("./res/image14.webp"),
    animation:'animateImage14'
  }
]

function Card(props){
  const i=props.i;
  return  <ViroNode key={i}
  opacity={0} position={[0, 0.02, 0]}
  animation={{
    name:props.item.animation,
    run: props.runAnimation
    }}
>   
  <ViroFlexView
      rotation={[-90, 0, 0]}
      height={0.03}
      width={0.05}
      style={styles.card}
  >
    <ViroFlexView
      style={styles.cardWrapper}
    >
      <ViroImage
        height={0.015}
        width={0.015}
        style={styles.image}
        source={props.item.image}
      />
      <ViroText
        textClipMode="None"
        text={props.item.name}
        scale={[.015, .015, .015]}
        style={styles.textStyle}
      />
    </ViroFlexView>
    <ViroFlexView
      onTouch={() => alert("twitter")}
      style={styles.subText}
    >
     {props.item.email&& <ViroText
        width={0.01}
        height={0.01}
        textAlign="left"
        textClipMode="None"
        text={props.item.email}
        scale={[.01, .01, .01]}
        style={styles.textStyle}
        
      />}
      <ViroAnimatedImage
        height={0.01}
        width={0.01}
        loop={true}
        source={require('./res/mail.gif')}
      />
    </ViroFlexView>
  </ViroFlexView>
</ViroNode>
}


export class Contact extends Component {

  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false
  }

  getNoTrackingUI(){
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }/>
    )
  }



  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker target={"businessCard"}
          onAnchorFound={ 
            () => this.setState({
                runAnimation: true
            })}>
          <ViroNode key="card" >
            {list.length&&<>

            <ViroText rotation={[-90, 0, 0]} text={"Meet the Code Your Chances Team"} scale={[.5, .8, .5]} extrusionDepth={5} width={20} color={"#000000"} position={[0, -4, -2]} style={styles.helloWorldTextStyle} />

            { list.map((e,i)=><Card runAnimation={this.state.runAnimation} i={i} item={list[i]}/>)}
            </>
            }
            
            <ViroNode opacity={0} position={[0, 0, 0]}
              animation={{
                name:'animateViro',
                run: this.state.runAnimation
              }}
            >
              <ViroText text="www.codeyourchances.com"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                style={styles.textStyle}
              />
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    )
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  },
  boldFont: {
    color: '#FFFFFF',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
},
helloWorldTextStyle: {
  fontFamily: 'Arial',
  fontSize: 30,
  color: '#ffffff',
  textAlignVertical: 'center',
  textAlign: 'center',
},
});

ViroARTrackingTargets.createTargets({
  "businessCard" : {
    source : require('./res/cyc.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)"
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)"
  },
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#FF0000',
  },
  sideMaterial: {
    diffuseColor: '#0000FF',
  },
});

ViroAnimations.registerAnimations({
  animateImage:{
    properties:{
      positionX: 0,
      opacity: 1.0,
      rotateZ: -0                     
    },
      easing:"EaseIn",
      duration: 5000
  },
   animateImage2:{
    properties:{
      positionX: -0.05,
      opacity: 1.0,
      rotateZ: -20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage3:{
    properties:{
      positionX: +0.05,
      opacity: 1.0,
      rotateZ: +20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage4:{
    properties:{
      positionX: -0.10,
      opacity: 1.0,
      rotateZ: -20                    
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage5:{
    properties:{
      positionX: +0.10,
      opacity: 1.0,
      rotateZ: +20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage6:{
    properties:{
      positionX: -0.15,
      opacity: 1.0,
      rotateZ: -20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage7:{
    properties:{
      positionX: +0.15,
      opacity: 1.0,
      rotateZ: +20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage8:{
    properties:{
      positionX: -0.20,
      opacity: 1.0,
      rotateZ: -20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage9:{
    properties:{
      positionX: +0.20,
      opacity: 1.0,
      rotateZ: +20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage10:{
    properties:{
      positionX: -0.25,
      opacity: 1.0,
      rotateZ: -20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage11:{
    properties:{
      positionX: +0.25,
      opacity: 1.0,
      rotateZ: +20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage12:{
    properties:{
      positionX: -0.30,
      opacity: 1.0,
      rotateZ: -20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage13:{
    properties:{
      positionX: +0.35,
      opacity: 1.0,
      rotateZ: +20                     
    },
      easing:"EaseIn",
      duration: 5000
  },  animateImage14:{
    properties:{
      positionX: -0.40,
      opacity: 1.0,
      rotateZ: -20                     
    },
      easing:"EaseIn",
      duration: 5000
  },
  animateViro: {
    properties: {
      opacity: 1.0,
    },
    easing:"EaseIn",
    duration: 5000
  }
});

module.exports = Contact;
