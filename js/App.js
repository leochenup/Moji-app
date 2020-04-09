import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';
import WelcomePage from './pages/WelcomePage'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FunctionPage from '../js/pages/FunctionPage'

import NewestPage from '../js/pages/NewestPage'
import FilesPage from '../js/pages/FilesPage'
import MyPage from '../js/pages/MyPage'
import FavoritePage from '../js/pages/FavoritePage'


class Empty extends Component { render() { return (null) } }

const Tab = createBottomTabNavigator();

function MyTabs(tcolor) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: tcolor,
        labelStyle: {
          fontSize: 10
        }
      }}
    >
      <Tab.Screen
        name="new"
        component={NewestPage}
        options={{
          tabBarLabel: '最新',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-refresh-circle" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="files"
        component={FilesPage}
        options={{
          tabBarLabel: '文件夹',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-folder" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="empty"
        component={Empty}
        options={{
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoritePage}
        options={{
          tabBarLabel: '收藏',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-star-half" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mine"
        component={MyPage}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class App extends Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }

  state = {
    themeColor: '#1E90FF',
    fucPageOffset: 100,
    isShowFucPage: false,
    isDisabledBtn: false
  }

  /**
   * 打开 FunctionPage
   */
  onOpenFucPage = () => {
    if (!this.state.isDisabledBtn) {
      LayoutAnimation.easeInEaseOut()
      console.log(this.state.isShowFucPage)
      this.setState({
        isDisabledBtn: !this.state.isDisabledBtn,
        isShowFucPage: !this.state.isShowFucPage,
        fucPageOffset: this.state.fucPageOffset - 100
      })
    }
  }
  /**
   * 关闭 FunctionPage
   */
  onCloseFucPage = () => {
    LayoutAnimation.easeInEaseOut()
    this.setState({
      isDisabledBtn: !this.state.isDisabledBtn,
      fucPageOffset: this.state.fucPageOffset + 100
    })
    setTimeout(() => {
      this.setState({ isShowFucPage: !this.state.isShowFucPage, })
    }, 500)
  }

  render() {
    return (
      <>
        <NavigationContainer style={styles.container}>
          {MyTabs(this.state.themeColor)}
          <View style={styles.functionBtn}>
            <TouchableOpacity
              disabled={this.state.isDisabledBtn}
              onPress={() => {
                this.onOpenFucPage()
              }}
            >
              <Ionicons name="ios-add-circle" color={'orange'} size={50} />
            </TouchableOpacity>
          </View>
          {this.state.isShowFucPage
            ? <FunctionPage fncConStyle={{ ...styles.fncConStyle, bottom: this.state.fucPageOffset + '%' }} onClose={this.onCloseFucPage} />
            : null}

        </NavigationContainer>
        <WelcomePage />
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  functionBtn: {
    position: 'absolute',
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        bottom: 30,
        height: 50,
        width: 100,
        marginLeft: -50,
      },
      android: {
        bottom: 0,
        height: 50,
        width: 90,
        marginLeft: -45,
        borderWidth: 1,
        borderColor: 'white'
      }
    })
  },
  fncConStyle: {
    position: 'absolute',
  }
});