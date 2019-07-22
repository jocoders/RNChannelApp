import React from 'react'
import { Image, Platform, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Text, View } from 'react-native'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  amountStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  avatarContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarImageStyle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  commentsCountStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 40,
    backgroundColor: BLUE,
    borderRadius: 10
  },
  headerContainer: {
    flex: 4,
    paddingLeft: 5,
    height: '100%',
    justifyContent: 'space-between'
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  timeStyle: {
    fontSize: 10
  },
  timeContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  topicStyle: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})

const FavoritesItem = (props, { navigation }) => {
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
