import React from 'react'
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    padding: 10,
    width: 260
  },
  disabled: {
    borderColor: '#aaa'
  },
  disabledText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
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
  return (
    <TouchableOpacity style={{ width: '90%' }} onPress={onPress}>
      {content}
    </TouchableOpacity>
  )
}

export default ButtonWithBackground
