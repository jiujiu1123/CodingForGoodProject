'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from '@viro-community/react-viro';

var createReactClass = require('create-react-class');
var PortalVideo = createReactClass({

  render: function() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
          <Viro3DObject source={require('../res/portals/portal_wood_frame.vrx')}
              resources={[
                require('../res/portals/portal_wood_frame_diffuse.png'),
                require('../res/portals/portal_wood_frame_normal.png'),
                require('../res/portals/portal_wood_frame_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Video source={require("./360_surf.mp4")} loop={true} />   
       </ViroPortalScene>
      </ViroARScene>
    );
  },
});

module.exports = PortalVideo;