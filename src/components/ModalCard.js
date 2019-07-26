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
    alignSelf: 'center',
    width: 260
  },
  iconContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: BLUE,
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    marginLeft: 5,
    width: 20
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: BLUE,
    borderRadius: 10,
    borderWidth: 1,
    height: 140,
    justifyContent: 'center',
    marginTop: 20,
    width: 260
  },
  noticeStyle: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20,
    width: 260
  },
  textInput: {
    fontSize: 15,
    marginLeft: 5,
    padding: 5,
    width: 210
  },
  titleContainer: {
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BLUE,
    flexDirection: 'row',
    marginTop: 5,
    width: 260
  }
})
const ModalCard = props => {
  const { buttonContainer, imageContainer, iconContainer, noticeStyle, textInput, titleContainer } = styles
  const {
    buttonAddPushed,
    descriptionNotice,
    descriptionPlaceholder,
    descriptionValue,
    header,
    onChange,
    onChangeDescription,
    image,
    imageTopicStyle,
    chooseImage,
    create,
    hideModal,
    titleNotice,
    titlePlaceholder,
    titleValue,
    visible
  } = props
  let description
  if (descriptionPlaceholder) {
    description = (
      <View>
        <Text style={noticeStyle}>{descriptionNotice}</Text>
        <View style={titleContainer}>
          <View style={iconContainer}>
            <Ionicons name="ios-add" color="#ffffff" size={20} />
          </View>
          <TextInput
            autoCapitalize="words"
            multiline={true}
            onChangeText={onChangeDescription}
            placeholder={descriptionPlaceholder}
            style={textInput}
            textAlignVertical={true}
            value={descriptionValue}
          />
        </View>
      </View>
    )
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <Modal
        animationType="slide"
        onRequestClose={() => {
          Alert.alert('Modal has been closed')
        }}
        transparent={false}
        visible={visible}
      >
        <ModalHeader header={header} onLeftIconPress={hideModal} onRightIconPress={create} />
        <ScrollView>
          <View style={[imageContainer, imageTopicStyle]}>
            <TouchableOpacity onPress={chooseImage}>
              <Ionicons name="ios-add" color={BLUE} size={60} style={{ display: buttonAddPushed ? 'none' : 'flex' }} />
            </TouchableOpacity>
            <Image
              source={{ uri: image }}
              style={[
                {
                  borderRadius: 10,
                  display: buttonAddPushed ? 'flex' : 'none',
                  height: 140,
                  width: 260
                },
                imageTopicStyle
              ]}
            />
          </View>
          <Text style={noticeStyle}>{titleNotice}</Text>
          <View style={titleContainer}>
            <View style={iconContainer}>
              <Ionicons name="ios-add" color="#ffffff" size={20} />
            </View>
            <TextInput
              autoCapitalize="words"
              multiline={true}
              onChangeText={onChange}
              placeholder={titlePlaceholder}
              style={textInput}
              textAlignVertical={true}
              value={titleValue}
            />
          </View>
          {description}
          <TouchableOpacity style={buttonContainer}>
            <ButtonWithBackground buttonColor={BLUE} onPress={create} text="Create" />
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
  )
}

export default ModalCard
