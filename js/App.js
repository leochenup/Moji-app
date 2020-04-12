import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import SettingPage from './pages/SettingPage'
import PhotoPage from './pages/PhotoPage'
import SoundRecordingPage from './common/components/SoundRecordingPage'
import TransPage from '../js/pages/TransPage'


const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 100,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function AppStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config
        }
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="MessagePage" component={MessagePage} />
      <Stack.Screen name="SettingPage" component={SettingPage} />
      <Stack.Screen name="PhotoPage" component={PhotoPage} />
      <Stack.Screen name="SoundRecordingPage" component={SoundRecordingPage} />
      <Stack.Screen name="TransPage" component={TransPage} />
    </Stack.Navigator>
  );
}

export default class App extends Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }


  render() {
    return (
      <NavigationContainer style={styles.container}>
        {AppStack()}
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});