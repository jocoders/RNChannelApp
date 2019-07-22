import React from 'react'
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: 260,
    padding: 10,
    marginTop: 15,
    borderRadius: 10
  },
  disabled: {
    borderColor: '#aaa'
  },
  disabledText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

const ButtonWithBackground = props => {
  const { button, disabled, disabledText } = styles
  const { buttonColor, onPress, text } = props
  const content = (
    <View style={[button, { backgroundColor: buttonColor }]}>
      <Text style={disabledText}>{text}</Text>
    </View>
  )

  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{content}</TouchableNativeFeedback>
  }
  console.log('IOS')
  return (
    <TouchableOpacity style={{ width: '90%' }} onPress={onPress}>
      {content}
    </TouchableOpacity>
  )
}

export default ButtonWithBackground
