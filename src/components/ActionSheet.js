import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 20,
    color: '#0D3FDE'
  }
})

const ActionSheet = (props) => {
  const { container, textStyle } = styles
  return (
    <View style={container}>
      <TouchableOpacity onPress={props.showActionSheet}>
        <Text style={textStyle}>
          {props.sortedHeader}
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
