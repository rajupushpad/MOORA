/////////////////////////////////////////////////////////////////
// exports

// react
import React from 'react'
import { View,Text } from 'react-native'

// components
import OnBoard from './src/screens/OnBoard'

/////////////////////////////////////////////////////////////////
// class
export default class App extends React.Component {

  /////////////////////////////////////////////////////////////////
  // render

  render(){
    return(
      <View style={{flex: 1}}>
        <OnBoard />
      </View>
    )
  }
}