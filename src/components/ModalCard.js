import React from 'react'
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonWithBackground from './ButtonWithBackground'
import ModalHeader from './ModalHeader'

import { BLUE } from '../constants'

const styles = StyleSheet.create({
  buttonContainer: {
    width: 260,
    alignSelf: 'center'
  },
  imageContainer: {
    height: 140,
    width: 260,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: BLUE,
    borderWidth: 1,
    //backgroundColor: '#8E8E93',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    height: 20,
    width: 20,
    marginLeft: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: BLUE
  },
  noticeStyle: {
    width: 260,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  textInput: {
    fontSize: 20,
    marginLeft: 5,
    padding: 5,
    width: 210
  },
  titleContainer: {
    width: 260,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BLUE,
    flexDirection: 'row',
    marginTop: 5,
    alignSelf: 'center'
  }
})
const ModalCard = props => {
  const { buttonContainer, imageContainer, iconContainer, noticeStyle, textInput, titleContainer } = styles
  const {
    buttonAddPushed,
    header,
    onChange,
    image,
    chooseImage,
    create,
    hideModal,
    noticeText,
    titleValue,
    visible
  } = props
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed')
        }}
      >
        <ModalHeader header={header} onLeftIconPress={hideModal} onRightIconPress={create} />
        <ScrollView>
          <View style={imageContainer}>
            <TouchableOpacity onPress={chooseImage}>
              <Ionicons name="ios-add" color={BLUE} size={60} style={{ display: buttonAddPushed ? 'none' : 'flex' }} />
            </TouchableOpacity>
            <Image
              source={{ uri: image }}
              style={{
                display: buttonAddPushed ? 'flex' : 'none',
                width: 260,
                height: 140,
                borderRadius: 10
              }}
            />
          </View>
          <Text style={noticeStyle}>{noticeText}</Text>
          <View style={titleContainer}>
            <View style={iconContainer}>
              <Ionicons name="ios-add" color="#ffffff" size={20} />
            </View>
            <TextInput
              autoCapitalize="words"
              multiline={true}
              onChangeText={onChange}
              placeholder="Channel title..."
              style={textInput}
              textAlignVertical={true}
              value={titleValue}
            />
          </View>
          <TouchableOpacity style={buttonContainer}>
            <ButtonWithBackground buttonColor={BLUE} onPress={create} text="Create" />
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
  )
}

export default ModalCard
