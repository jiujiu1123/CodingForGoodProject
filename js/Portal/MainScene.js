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
var MainScene = createReactClass({

  render: function() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.4, .3, .4]}>
            <Viro3DObject source={require('./res/portals/portal_wood_frame.vrx')}
              resources={[
                require('./res/portals/portal_wood_frame_diffuse.png'),
                require('./res/portals/portal_wood_frame_normal.png'),
                require('./res/portals/portal_wood_frame_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('../../js/res/3d-pic.jpg')} />
          {/* <Viro360Video source={require("../../js/res/360_surf.mp4")} onFinish={this._onFinish}
    onUpdateTime={this._onUpdateTime}
    onError={this._videoError}
    loop={true}
    paused={false}
    volume={1.0} /> */}
        </ViroPortalScene>
      </ViroARScene>
    );
  },
});

module.exports = MainScene;
