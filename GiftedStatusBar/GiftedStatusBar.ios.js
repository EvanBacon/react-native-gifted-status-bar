import React, { Component } from 'react';
import { requireNativeComponent, processColor } from 'react-native';
let RNStatusBarView = requireNativeComponent('RNStatusBarView', GiftedStatusBar);

export default class GiftedStatusBar extends Component {
  render() {
    const {color, style, ...everythingElse} = this.props
    return (
      <RNStatusBarView {...everythingElse} statusColor={processColor(color)} style={[style, {position:'absolute', top: 0, left: 0, right: 0, height: 20}]}>
      {this.props.children}
      </RNStatusBarView>);
  }
}

GiftedStatusBar.propTypes = {
  colors: React.PropTypes.string.isRequired,
}
