/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import GiftedStatusBar from './GiftedStatusBar';

export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.colorWithOpacity(1),
      translation: 0,
    }
  }

  colorWithOpacity = (opacity:number) => {
    return `rgba(51,156,226,${opacity})`
  }
  render() {

    /// Translate and fade just like in snapchat
    const handleScroll = (event: Object) => {
      const translation = event.nativeEvent.contentOffset.y;
      if (translation < 0) {
        const delta = translation * -0.5;

        this.setState({
          translation: delta,
          color: this.colorWithOpacity((50 - delta) * 0.1)
        })

      } else {
        this.setState({
          translation: 0
        })
      }
    }

    const renderGiftedStatusBar = () => {
      //// This is what you're looking for ;)
      return (
        <GiftedStatusBar {...this.state}/>
      );
    }

    return (
      <View style={styles.container}>
      {renderGiftedStatusBar()}
      <ScrollView
      scrollEventThrottle={16}
      onScroll={handleScroll}
      style={{flex: 1}}
      contentContainerStyle={{justifyContent: 'center', flex: 1}}
      >
      <Text style={styles.welcome}>
      Gifted Status Bar
      </Text>
      <Text style={styles.instructions}>
      You can set the `color`
      </Text>
      <Text style={styles.instructions}>
      And you can set the `translation`
      </Text>
      <Text style={styles.instructions}>
      Bridged into Swift
      </Text>
      </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GiftedStatusBar', () => Example);
