import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: 45,
    backgroundColor: BLUE
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#ffffff'
    //backgroundColor: '#C0C0C0'
  },
  textInput: {
    fontSize: 15,
    height: 35,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5
  }
})

const SearchBar = props => {
  const { value, onChangeText, isEmpty, placeholder, onPressXButton } = props
  const { container, subContainer, textInput } = styles
  return (
    <View style={container}>
      <View style={subContainer}>
        <Icon style={{ paddingLeft: 10 }} name="search" color="#586589" size={15} />
        <View style={{ width: '85%' }}>
          <TextInput
            style={textInput}
            value={value}
            autoCapitalize="words"
            onChangeText={onChangeText}
            placeholder={placeholder}
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
