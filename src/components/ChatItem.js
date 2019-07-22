import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  avatarImageStyle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2
  },
  container: {
    flexDirection: 'row',
    maxWidth: '74%'
  },
  textStyle: {
    fontSize: 15,
    padding: 5,
    borderRadius: 10
  },
  textContainer: {
    flexDirection: 'column',
    backgroundColor: 'pink',
    marginLeft: 8,
    borderRadius: 10
  },
  timeContainer: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  timeStyle: {
    fontSize: 10
  }
})
const ChatItem = props => {
  const { avatarImageStyle, container, textContainer, textStyle, timeContainer, timeStyle } = styles
  const { itemAvatarImage, messageTime, value } = props
  return (
    <View style={container}>
      <Image style={avatarImageStyle} resizeMode="stretch" source={itemAvatarImage} />
      <View style={textContainer}>
        <Text style={textStyle}>{value}</Text>
        <View style={timeContainer}>
          <Text style={timeStyle}>{messageTime}</Text>
        </View>
      </View>
    </View>
  )
}

export default ChatItem
