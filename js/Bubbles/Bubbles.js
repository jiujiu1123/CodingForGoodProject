'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
} from '@viro-community/react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      counter: 0,
      textScale = [0, 0, 0],
      scale1: [0.11, 0.11, 0.11],
      scale2: [0.1, 0.1, 0.1],
      scale3: [0.1, 0.1, 0.1],
      scale4: [0.1, 0.1, 0.1],
      scale5: [0.1, 0.1, 0.1],
      scale6: [0.1, 0.1, 0.1],
      scale7: [0.12, 0.12, 0.12],
      scale8: [0.1, 0.1, 0.1],
      scale9: [0.1, 0.1, 0.1],
      scale10: [0.1, 0.1, 0.1],
      scale11: [0.13, 0.13, 0.13],
      scale12: [0.1, 0.1, 0.1],
      scale13: [0.1, 0.1, 0.1],
      scale14: [0.1, 0.1, 0.1],
      scale15: [0.1, 0.1, 0.1],
      scale16: [0.14, 0.14, 0.14],
      scale17: [0.1, 0.1, 0.1],
      scale18: [0.12, 0.12, 0.12],
      scale19: [0.1, 0.1, 0.1],
      scale20: [0.11, 0.11, 0.11],
      scale21: [0.1, 0.1, 0.1],
      scale22: [0.13, 0.13, 0.13],
      scale23: [0.1, 0.1, 0.1],
      scale24: [0.14, 0.14, 0.14],
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);

    
  }

  

  render() {
    var scale1 = [0.1,0.1,0.1];
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroText style={styles.helloWorldTextStyle} text="Congratulations!" scale={this.state.textScale}/>
        <ViroNode position={[0,-1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale1}
            type="VRX"
            onClick={() => this.setState({
              scale1: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim1", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[1,-1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale2}
            type="VRX"
            onClick={() => this.setState({
              scale2: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim2", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[1,-1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale3}
            type="VRX"
            onClick={() => this.setState({
              scale3: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim3", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[1,1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale4}
            type="VRX"
            onClick={() => this.setState({
              scale4: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[0,1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale5}
            type="VRX"
            onClick={() => this.setState({
              scale5: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim1", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[2,-1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale6}
            type="VRX"
            onClick={() => this.setState({
              scale6: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim2", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[1,-1,2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale7}
            type="VRX"
            onClick={() => this.setState({
              scale7: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim3", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[1,-1,1]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale8}
            type="VRX"
            onClick={() => this.setState({
              scale8: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-2,-1,1]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale9}
            type="VRX"
            onClick={() => this.setState({
              scale9: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim1", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,1,1]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale10}
            type="VRX"
            onClick={() => this.setState({
              scale10: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim2", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,1,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale11}
            type="VRX"
            onClick={() => this.setState({
              scale11: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim3", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[0,0,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale12}
            type="VRX"
            onClick={() => this.setState({
              scale12: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,0,1]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale13}
            type="VRX"
            onClick={() => this.setState({
              scale13: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim1", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,0,0]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale14}
            type="VRX"
            onClick={() => this.setState({
              scale14: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim2", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,0,-1]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale15}
            type="VRX"
            onClick={() => this.setState({
              scale15: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim3", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale16}
            type="VRX"
            onClick={() => this.setState({
              scale16: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale17}
            type="VRX"
            onClick={() => this.setState({
              scale17: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale18}
            type="VRX"
            onClick={() => this.setState({
              scale18: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale19}
            type="VRX"
            onClick={() => this.setState({
              scale19: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale20}
            type="VRX"
            onClick={() => this.setState({
              scale20: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale21}
            type="VRX"
            onClick={() => this.setState({
              scale21: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale22}
            type="VRX"
            onClick={() => this.setState({
              scale22: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale23}
            type="VRX"
            onClick={() => this.setState({
              scale23: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>

        <ViroNode position={[-1,-1,-2]}>
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                require('./res/emoji_smile/emoji_smile_normal.png'),
                require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, 1, -1]}
            scale={this.state.scale24}
            type="VRX"
            onClick={() => this.setState({
              scale24: [0, 0, 0],
              counter: counter + 1
            }), _checkCounter()}
            animation={{name: "anim4", run: true, loop: true}} />
        </ViroNode>
        
      </ViroARScene>

      
    );
  }

  _checkCounter() {
    if (this.state.counter >= 24) {
      this.setState({
        textScale: [0.2, 0.2, 0.2]
      });
    }
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}


var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 25,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

ViroAnimations.registerAnimations({
  rotateLeft: {properties: {rotateY: "+=-360"}, duration: 2000},
  rotateRight: {properties: {rotateY: "+=360"}, duration: 2000},
  moveUp1: {properties: {positionY: "+=0.1"},duration: 1000},
  moveUp2: {properties: {positionY: "+=0.3"},duration: 2000},
  moveDown1: {properties: {positionY: "+=-0.1"},duration: 1000},
  moveDown2: {properties: {positionY: "+=-0.3"},duration: 2000},
  moveLeft1: {properties: {positionX: "-=0.1"},duration: 1000},  
  moveLeft2: {properties: {positionX: "-=0.3"},duration: 2000},
  moveRight1: {properties: {positionX: "+=0.1"},duration: 1000},
  moveRight2: {properties: {positionX: "+=0.3"},duration: 2000},
  moveForward1: {properties: {positionZ: "+=0.1"},duration: 1000},
  moveForward2: {properties: {positionZ: "+=0.3"},duration: 2000},
  moveBack1: {properties: {positionZ: "+=-0.1"},duration: 1000},
  moveBack2: {properties: {positionZ: "+=-0.3"},duration: 2000},
  anim1:[
      ["moveLeft1", "moveForward1", "moveRight1", "moveBack1"],
      ["moveDown1", "moveUp1", "moveDown1", "moveUp1"],
      ["rotateLeft", "rotateRight", "rotateRight", "rotateRight"]
      ],
  anim2:[
      ["moveRight2", "moveForward2", "moveLeft2", "moveBack2"],
      ["moveUp2", "moveDown2", "moveUp2", "moveDown2"],
      ["rotateRight", "rotateRight", "rotateRight", "rotateRight"],
      ["moveForward1", "moveBack1"]
      ],
  anim3:[
    ["moveRight2", "moveBack1", "moveLeft2", "moveForward1"],
    ["moveUp2", "moveDown2", "moveDown1", "moveUp1"],
    ["rotateLeft", "rotateLeft", "rotateLeft"]
    ],
  anim4:[
    ["moveRight1", "moveBack2", "moveLeft2", "moveLeft1", "moveBack1", "moveForward2", "moveRight2", "moveForward1"],
    ["moveDown1", "moveUp2", "moveUp1", "moveDown2", "moveUp2", "moveDown1", "moveDown2", "moveUp1"],
    ["rotateRight", "rotateRight", "rotateLeft", "rotateRight", "rotateLeft", "rotateLeft"]
    ]
});

module.exports = HelloWorldSceneAR;
