import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import WelcomePage from './pages/WelcomePage'


export default class App extends Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}>Home Page</Text>
        </View>
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
  }
});