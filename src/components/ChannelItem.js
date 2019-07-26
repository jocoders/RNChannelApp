import React from 'react'
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    alignItems: 'center',
    borderRadius: 5,
    height: '100%',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    width: '100%'
  },
  headerStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  listItem: {
    height: 100,
    margin: 8,
    width: 140
  }
})

const ChannelItem = props => {
  const { headerStyle, imageBackgroundStyle, listItem } = styles
  const { channelItemHeader, imageSource, onPress } = props
  const item = (
    <View style={listItem}>
      <ImageBackground source={imageSource} style={imageBackgroundStyle}>
        <Text style={headerStyle}>{channelItemHeader}</Text>
      </ImageBackground>
    </View>
  )
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress}>{item}</TouchableNativeFeedback>
  }
  return <TouchableOpacity onPress={onPress}>{item}</TouchableOpacity>
}

export default ChannelItem
