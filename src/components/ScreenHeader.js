import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const ScreenHeader = props => {
  let leftIcon = null
  const { container, textStyle } = styles
  if (props.leftIconName) {
    leftIcon = <Ionicons style={{ paddingLeft: 8, color: '#586589' }} name={props.leftIconName} size={30} />
  }

  return (
    <View style={container}>
      <TouchableOpacity onPress={props.onLeftIconPress}>{leftIcon}</TouchableOpacity>
      <Text style={textStyle}>{props.header}</Text>
      <TouchableOpacity onPress={props.onRightIconPress}>
        <Ionicons style={{ paddingRight: 8, color: '#586589' }} name={props.rightIconName} size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeader
