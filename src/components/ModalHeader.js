import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    marginTop: 20,
    width: '95%'
  },
  iconStyle: {
    color: BLUE,
    fontSize: 15,
    fontWeight: 'bold'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
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
