import React, { Component } from 'react';
import { requireNativeComponent, processColor } from 'react-native';
const RNGiftedStatusBarView = requireNativeComponent('RNGiftedStatusBarView', GiftedStatusBar);

export default class GiftedStatusBar extends Component {
  render() {
    const {color, style, ...everythingElse} = this.props
    return (
      <RNGiftedStatusBarView {...everythingElse} statusColor={processColor(color)} style={[style, {position:'absolute', top: 0, left: 0, right: 0, height: 20}]}>
      {this.props.children}
      </RNGiftedStatusBarView>
    );
  }
}

GiftedStatusBar.propTypes = {
  color: React.PropTypes.string.isRequired,
}
