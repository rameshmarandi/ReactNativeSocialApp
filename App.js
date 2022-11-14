import React, {Component, useEffect} from 'react'
import {Text, View, LogBox} from 'react-native'

import ScrollAnimation from './src/Components/ScrollAnimation'
import AppNavigator from './src/Screens/Navigation/AppNavigator'

export default class App extends Component {
  render () {
    LogBox.ignoreAllLogs(true)
    // useEffect(() => {
    //   LogBox.ignoreAllLogs(true)
    // }, [])
    return (
      <>
      
        <AppNavigator />
        {/* <ScrollAnimation/> */}
      </>
    )
  }
}
