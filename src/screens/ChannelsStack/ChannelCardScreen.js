import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScreenHeader } from '../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const ChannelCardScreen = ({ navigation }) => {
  const { container } = styles
  return (
    <View style={container}>
      <ScreenHeader header="Channel" leftIconName="ios-arrow-back" onLeftIconPress={() => navigation.goBack()} />
      <Text>This is ChannelCardScreen</Text>
    </View>
  )
}

export default ChannelCardScreen
