import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  avatarImageStyle: {
    borderRadius: 44 / 2,
    height: 44,
    width: 44
  },
  container: {
    flexDirection: 'row',
    maxWidth: '74%'
  },
  textStyle: {
    borderRadius: 10,
    fontSize: 15,
    padding: 5
  },
  textContainer: {
    backgroundColor: 'pink',
    borderRadius: 10,
    flexDirection: 'column',
    marginLeft: 8
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
