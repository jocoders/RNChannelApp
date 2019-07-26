import React from 'react'
import {
  ImageBackground,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

const styles = StyleSheet.create({
  headerStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  imageBackgroundStyle: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'flex-end',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  listItem: {
    height: 140,
    margin: 6,
    width: 120
  }
})

const InterestsItem = props => {
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
