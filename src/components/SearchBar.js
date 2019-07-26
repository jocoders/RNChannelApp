import React from 'react'
import { TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BLUE,
    height: 45,
    justifyContent: 'center',
    width: '100%'
  },
  textInput: {
    fontSize: 15,
    height: 35,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  subContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
    height: 35,
    width: '95%'
  }
})

const SearchBar = props => {
  const { container, subContainer, textInput } = styles
  const { isEmpty, onChangeText, onPressXButton, placeholder, value } = props
  return (
    <View style={container}>
      <View style={subContainer}>
        <Icon style={{ paddingLeft: 10 }} name="search" color="#586589" size={15} />
        <View style={{ width: '85%' }}>
          <TextInput
            autoCapitalize="words"
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={textInput}
            value={value}
          />
        </View>
        <TouchableOpacity onPress={onPressXButton}>
          <Icon style={{ opacity: isEmpty ? 0 : 1 }} name="close" color="#586589" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar
