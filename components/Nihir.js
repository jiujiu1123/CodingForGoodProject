import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator
} from '@viro-community/react-viro';
import PortalVideo  from '../js/Portal/Portals/PortalVideo';

class HelloWorldSceneAR extends Component {

  constructor(props) {
    super(props);
    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }


  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
          <InitialARScene/>
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
      </ViroARScene>
    );
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
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default class Nihir extends React.Component{
	render(){
			return(
				<ViroARSceneNavigator
					autofocus={true}
					initialScene={{
						scene: PortalVideo,
					}}
					style={{flex: 1}}
				/>
			);
		}
}