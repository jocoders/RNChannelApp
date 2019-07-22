import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: BLUE
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  secondSubContainer: {
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
  },
  textInput: {
    fontSize: 18,
    paddingBottom: 4,
    maxHeight: 200
  },
  iconStyle: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#ffffff',
    bottom: 0
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
              style={textInput}
              value={value}
              textAlignVertical={true}
              multiline={true}
              autoCapitalize="words"
              onChangeText={onChangeText}
              placeholder="Message"
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
