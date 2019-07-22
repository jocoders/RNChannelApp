import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: BLUE
  }
})

const ModalHeader = props => {
  const { container, iconStyle, textStyle } = styles
  const { header, onLeftIconPress, onRightIconPress } = props
  return (
    <View style={container}>
      <TouchableOpacity onPress={onLeftIconPress}>
        <Text style={iconStyle}>Cancel</Text>
      </TouchableOpacity>
      <Text style={textStyle}>{header}</Text>
      <TouchableOpacity onPress={onRightIconPress}>
        <Text style={iconStyle}>Create</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ModalHeader
