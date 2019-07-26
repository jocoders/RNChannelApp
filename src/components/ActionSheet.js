import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  textStyle: {
    color: '#0D3FDE',
    fontSize: 20
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    width: '100%'
  }
})

const ActionSheet = props => {
  const { container, textStyle } = styles
  const { showActionSheet, sortedHeader } = props
  return (
    <View style={container}>
      <TouchableOpacity onPress={showActionSheet}>
        <Text style={textStyle}>
          {sortedHeader}
          <Ionicons
            size={20}
            name="ios-arrow-down"
          />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActionSheet
