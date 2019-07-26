import React from 'react'
import { Image, Platform, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Text, View } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  amountStyle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: '100%'
  },
  avatarImageStyle: {
    borderRadius: 44 / 2,
    height: 44,
    width: 44
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    padding: 10,
    width: '100%'
  },
  commentsCountStyle: {
    alignItems: 'center',
    backgroundColor: BLUE,
    borderRadius: 10,
    justifyContent: 'center',
    height: 20,
    width: 40
  },
  headerContainer: {
    flex: 4,
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: 5
  },
  headerSubContainer: {
    flexDirection: 'row'
  },
  headerStyle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  headerDescription: {
    fontSize: 12
  },
  messageContainer: {},
  messageStyle: {
    fontSize: 12
  },
  shadowStyle: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  timeStyle: {
    fontSize: 10
  },
  timeContainer: {
    alignItems: 'flex-end',
    flex: 1,
    height: '100%',
    justifyContent: 'space-between'
  },
  topicStyle: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})

const FavoritesItem = props => {
  const { commentsCount, channelHeader, itemAvatarImage, messageText, onPress, time, topic, userMessageName } = props
  const {
    amountStyle,
    avatarContainer,
    avatarImageStyle,
    container,
    commentsCountStyle,
    headerContainer,
    headerSubContainer,
    headerStyle,
    headerDescription,
    messageStyle,
    messageContainer,
    shadowStyle,
    timeStyle,
    topicStyle,
    timeContainer
  } = styles
  const item = (
    <View style={[container, shadowStyle]}>
      <View style={avatarContainer}>
        <Image style={avatarImageStyle} resizeMode="stretch" source={itemAvatarImage} />
      </View>
      <View style={headerContainer}>
        <View style={headerSubContainer}>
          <Text style={headerStyle}>Channel: </Text>
          <Text style={headerDescription}>{channelHeader}</Text>
        </View>
        <Text style={topicStyle}>Topic: {topic}</Text>
        <View style={messageContainer}>
          <Text style={messageStyle}>
            {userMessageName}: {messageText}
          </Text>
        </View>
      </View>
      <View style={timeContainer}>
        <Text style={timeStyle}>{time}</Text>
        <View style={commentsCountStyle}>
          <Text style={amountStyle}>{commentsCount}</Text>
        </View>
      </View>
    </View>
  )

  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{item}</TouchableNativeFeedback>
  }
  return <TouchableOpacity onPress={onPress}>{item}</TouchableOpacity>
}

export default FavoritesItem
