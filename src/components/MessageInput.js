import React from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0
  },
  iconStyle: {
    alignSelf: 'center',
    bottom: 0,
    color: '#ffffff',
    position: 'absolute'
  },
  secondSubContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '80%'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  textInput: {
    fontSize: 18,
    maxHeight: 200,
    paddingBottom: 4
  }
})
const MessageInput = props => {
  const { container, iconStyle, subContainer, secondSubContainer, textInput } = styles
  const { attachIconPress, onChangeText, sentIconPress, value } = props
  return (
    <KeyboardAvoidingView behavior="position" style={container} enabled>
      <View style={subContainer}>
        <TouchableOpacity onPress={attachIconPress}>
          <Ionicons style={iconStyle} name="ios-attach" size={30} />
        </TouchableOpacity>
        <View style={secondSubContainer}>
          <View style={{ width: '85%' }}>
            <TextInput
              autoCapitalize="words"
              multiline={true}
              onChangeText={onChangeText}
              placeholder="Message"
              style={textInput}
              textAlignVertical={true}
              value={value}
            />
          </View>
        </View>
        <TouchableOpacity onPress={sentIconPress}>
          <Ionicons style={iconStyle} name={value === '' ? 'ios-mic' : 'ios-send'} size={30} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default MessageInput
