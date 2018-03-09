/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * RN的生命周期：
 * 1：RN的UI相应
 * 2：RN的数据刷新
 * 3：ES5、ES6的区别
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

type Props = {};

/**
* Props 属性 相当于OC中的ReadOnly，只读属性！！
* state 状态 可以改变的 每个组件有一个SetState方法 用来改变状态 而且刷新界面！！
* componentWillMount 相当于OC中的ViewWillAppear在组件即将加载或者显示的时候调用！！
* RN默认的周期内Alert内只会来两次，但是我们通过事件主动去调用Alert，就可以弹出多次了
*/

// 给View添加点击能力，并监听其点击事件
export default class App extends Component<Props> {

// 状态机 
  state={
    title:'默认值'
  }

// ViewWillAppear 视图即将显示的时候
  componentWillMount(){
    // Alert.alert('componentWillMount')
  }

// 刷新完UI之后就来了 相当于iOS的ViewDidLoad，这个函数今后用来发送网络请求（第一次加载的数据）
  componentDidMount(){
        // Alert.alert('componentDidMount')
  }

// 视图点击后数据刷新UI成功之后将会回调 第一次加载UI的时候不会来
  componentDidUpdate(){
    Alert.alert('componentDidUpdate')
  }

// 是一个异步函数 也就是输如果快速多次改变state的值，并不会很快的刷新
  render() {
    return (
      <View style={styles.container}>

      <TouchableOpacity onPress={()=>this.click('点击')}>
      {Alert.alert('render 来了')}
        <Text>{this.state.title}</Text>
      </TouchableOpacity>

      </View>
    );
  }

  click(event){
    this.setState({
      title:event
    })
  }

}

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// // corporate ipsum > lorem ipsum
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';


// // 给View添加点击能力，并监听其点击事件
// export default class App extends Component<Props> {

// // 状态机 
//   state={
//     title:'默认值'
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity activeOpacity={0.3} onPress={()=>this.click('点击')}

//                                               onPressIn={()=>this.click('按下')}
//                                               onPressOut={()=>this.click('抬起')}
//                                               onLongPress={()=>this.click('长按')}>
//         <View>
//         <Text>{this.state.title}</Text>
//         </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }

// // 方法必须写在export中才行
//   click(event){
//     this.setState({
//       title:event
//     })
//    }

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
