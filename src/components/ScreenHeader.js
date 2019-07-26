import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 20,
    width: '100%'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const ScreenHeader = props => {
  const { container, textStyle } = styles
  const { header, leftIconName, onLeftIconPress, onRightIconPress, rightIconName } = props
  let leftIcon = null
  if (leftIconName) {
    leftIcon = <Ionicons style={{ paddingLeft: 8, color: '#586589' }} name={leftIconName} size={25} />
  }
  return (
    <View style={container}>
      <TouchableOpacity onPress={onLeftIconPress}>{leftIcon}</TouchableOpacity>
      <Text style={textStyle}>{header}</Text>
      <TouchableOpacity onPress={onRightIconPress}>
        <Ionicons style={{ paddingRight: 8, color: '#586589' }} name={rightIconName} size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeader
