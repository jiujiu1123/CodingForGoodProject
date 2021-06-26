'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroImage,
  Viro3DObject,
  ViroAnimations,
  ViroAmbientLight,
  ViroParticleEmitter,
  ViroNode
} from '@viro-community/react-viro';

export default class RocketScene extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR...",
      takeOff : false,
      starsRemaining: 3,
      s1op : 0.4,
      s2op : 0.4,
      s3op : 0.4
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onRocketClicked = this._onRocketClicked.bind(this);
    this._onStar1Clicked = this._onStar1Clicked.bind(this);
    this._onStar2Clicked = this._onStar2Clicked.bind(this);
    this._onStar3Clicked = this._onStar3Clicked.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color="#FFFFFF" />
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0.5, -1]} style={styles.RocketTextStyle} />
        
          <Viro3DObject source={require('./res/Rocket_Ship_v1_L3.123c485c9e1d-6d02-47cf-b751-9606e55c8fa1/10475_Rocket_Ship_v1_L3.obj')}
            resources={[require('./res/Rocket_Ship_v1_L3.123c485c9e1d-6d02-47cf-b751-9606e55c8fa1/10475_Rocket_Ship_v1_L3.mtl'),
                        require('./res/Rocket_Ship_v1_L3.123c485c9e1d-6d02-47cf-b751-9606e55c8fa1/10475_Rocket_Ship_v1_Diffuse.jpg')]}
            position={[0, -0.25, -1.01]}
            scale={[0.001,0.001,0.001]}
            rotation={[-90,0,0]}
            animation={{name:'flyRocket', run:this.state.takeOff, loop:false}}
            onClick={this._onRocketClicked}
            type="OBJ"
          />
        <ViroNode animation={{name:'flyFlames', run:this.state.takeOff, loop:false}}>
          <ViroParticleEmitter
            position={[0, -1.5, -5]}
            duration={5000}
            visible={true}
            delay={0}
            run={this.state.takeOff}
            loop={false}
            fixedToEmitter={true}

            image={{
              source:require("./res/fire.png"),                 
              height:0.1,
              width:0.1,
              bloomThreshold:1.0
            }}

            spawnBehavior={{
              particleLifetime:[4000,4000],
              emissionRatePerSecond:[50, 100], 
              spawnVolume:{
                shape:"box", 
                params:[1,1,1], 
                spawnOnSurface:false
              },
              maxParticles:400
            }}

            particleAppearance={{
              opacity:{
                initialRange:[0, 0],
                factor:"Time",
                interpolation:[
                  {endValue:0.5, interval:[0,500]},
                  {endValue:1.0, interval:[4000,5000]}
                ]
              },

              scale:{
                initialRange:[[5,5,5], [10,10,10]],
                factor:"Time",
                interpolation:[
                  {endValue:[3,3,3], interval:[0,4000]},
                  {endValue:[0,0,0], interval:[4000,5000]}
                ]
              },
            }}
            
            particlePhysics={{
              velocity:{
              initialRange:[[-0.5,-.5,0], [0.5,-1.5,0]]}
            }}
          />
        </ViroNode>

        <ViroImage source={require('./res/star.png')}
          position={[1,2,-5]}
          onClick={this._onStar1Clicked}
          opacity={this.state.s1op}
        />
        <ViroImage source={require('./res/star.png')}
          position={[-1,1,-5]}
          onClick={this._onStar2Clicked}
          opacity={this.state.s2op}
        />
        <ViroImage source={require('./res/star.png')}
          position={[1,0,-5]}
          onClick={this._onStar3Clicked}
          opacity={this.state.s3op}
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Trace the stars!",
        takeOff : false
      });
      
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  _onStar1Clicked(){
    if(this.state.s1op!=1.0){ // checks if already clicked
      this.setState({
        starsRemaining : this.state.starsRemaining - 1, //decrements number of stars remaining to click
        s1op: 1.0 // brightens star
      })
      if(this.state.starsRemaining==1){ // change text if last star
        this.setState({
          text: 'Tap the Rocket!'
        })
      }
    }
  }
  _onStar2Clicked(){
    if(this.state.s2op!=1.0){ // checks if already clicked
      this.setState({
        starsRemaining : this.state.starsRemaining - 1, //decrements number of stars remaining to click
        s2op: 1.0 // brightens star
      })
      if(this.state.starsRemaining==1){ // change text if last star
        this.setState({
          text: 'Tap the Rocket!'
        })
      }
    }
  }
  _onStar3Clicked(){
    if(this.state.s3op!=1.0){ // checks if already clicked
      this.setState({
        starsRemaining : this.state.starsRemaining - 1, //decrements number of stars remaining to click
        s3op: 1.0 // brightens star
      })
      if(this.state.starsRemaining==1){ // change text if last star
        this.setState({
          text: 'Tap the Rocket!'
        })
      }
    }
  }

  _onRocketClicked(){
    if(this.state.starsRemaining<=0){
      this.setState({
        text : 'Blast Off!',
        takeOff : true
      });
    }
  }

}

var styles = StyleSheet.create({
  RocketTextStyle: {
    fontFamily: 'Comic Sans',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroAnimations.registerAnimations({
  flyRocket: { //animation for rocket
    properties: {
      positionY: "+=8"
    },
    duration: 10000, //1.00 seconds
  },
  flyFlames: { // animation for the flames from rocket
    properties: {
      positionY: "+=33"
    },
    duration: 10000, //1.00 seconds
  }
});

module.exports = RocketScene;