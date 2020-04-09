import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class MyPage extends Component {
  render() {
      return (
        <View style={styles.container}>
          < Text style={styles.text}>MyPage</Text>
        </View>
      )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: 30
  }
})