/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// corporate ipsum > lorem ipsum
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

type Props = {};

// 给View添加点击能力，并监听其点击事件
export default class App extends Component<Props> {

// 状态机 
  state={
    title:'默认值'
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.3} onPress={()=>this.click('点击')}

                                              onPressIn={()=>this.click('按下')}
                                              onPressOut={()=>this.click('抬起')}
                                              onLongPress={()=>this.click('长按')}>
        <View>
        <Text>{this.state.title}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

// 方法必须写在export中才行
  click(event){
    this.setState({
      title:event
    })
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
