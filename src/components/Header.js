import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  viewStyle: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUE
  },
  textStyle: {
    fontSize: 25,
    color: '#ffffff'
  }
})

const Header = props => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

export default Header
