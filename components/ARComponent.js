import React, { Component } from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

var arScenes = {
  'Contact' : require('../js/Contact/Contact.js'),
  'Rocket' : require('../js/Rocket/RocketScene.js'),
  'Bubbles' : require('../js/Bubbles/Bubbles.js'),
  'PortalVideo':require('../js/Portal/Portals/PortalVideo'),
  'PortalPicture':require('../js/Portal/Portals/PortalPicture')
}

export default class ARComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ar: arScenes[this.props.route.params.name]
    }
   this._getARNavigator = this._getARNavigator.bind(this); }
 
   render() {return this._getARNavigator();}
    
   _getARNavigator() {
    return (<ViroARSceneNavigator
        initialScene={{scene: this.state.ar}} />);
  }

}

module.exports = ARComponent