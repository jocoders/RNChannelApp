import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  channelImageStyle: {
    borderRadius: 15,
    height: 30,
    marginRight: 8,
    width: 30
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 5,
    width: '100%'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    maxWidth: '80%'
  }
})

const ChatHeader = props => {
  const { channelImageStyle, container, textStyle } = styles
  const { channelImage, header, leftIconName, onChannelImagePress, onLeftIconPress } = props
  let leftIcon = null
  if (leftIconName) {
    leftIcon = <Ionicons style={{ marginLeft: 8, color: '#586589' }} name={leftIconName} size={30} />
  }
  return (
    <View style={container}>
      <TouchableOpacity onPress={onLeftIconPress}>{leftIcon}</TouchableOpacity>
      <Text style={textStyle}>{header}</Text>
      <TouchableOpacity onPress={onChannelImagePress}>
        <Image style={channelImageStyle} source={channelImage} />
      </TouchableOpacity>
    </View>
  )
}

export default ChatHeader
