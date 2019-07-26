import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  textStyle: {
    color: '#ffffff',
    fontSize: 25
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: BLUE,
    height: 45,
    justifyContent: 'center'
  }
})

const Header = props => {
  const { viewStyle, textStyle } = styles
  const { headerText } = props
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

export default Header
