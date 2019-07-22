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
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  },
  headerStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  listItem: {
    height: 140,
    width: 120,
    margin: 6
  }
})

const InterestsItem = (props, { navigation }) => {
  const { listItem, headerStyle, imageBackgroundStyle } = styles
  const { imageSource, channelItemHeader, onPress } = props
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

export default InterestsItem
