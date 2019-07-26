import React, { useEffect, useState } from 'react'
import { ActionSheetIOS, FlatList, StyleSheet, View } from 'react-native'
import { graphql, compose } from 'apollo-client'
import { useMutation } from 'react-apollo-hooks'
import * as Keychain from 'react-native-keychain'
import ImagePicker from 'react-native-image-picker'
import jwtDecode from 'jwt-decode'
import { ChannelItem, ModalCard, SearchBar, ScreenHeader } from '../../components'
import { GET_CURRENT_CHANNELS } from '../../graphql/querys'
import { SIGN_OUT } from '../../graphql/mutations'
import { channelData } from '../../dataDraft'
import { TOPICS_SCREEN } from '../routes'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const ChannelsScreen = ({ navigation }) => {
  const { container } = styles
  const sign_out = useMutation(SIGN_OUT)
  const [isModalVisible, setModalVisible] = useState(false)
  const [newChannelImage, setNewChannelImage] = useState({
    channelImage: null,
    loading: false
  })
  const [newChannelTitle, setNewChannelTitle] = useState('')
  const [channelDescription, setChannelDescription] = useState('')
  const [userInput, setInput] = useState({
    value: '',
    isEmpty: true
  })
  const changeDescriptionHandler = value => {
    setChannelDescription(value)
  }
  const setChannelImageHandler = source => {
    setNewChannelImage({
      channelImage: source,
      loading: true
    })
  }
  const chooseChannelImageHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
        alert(response.customButton)
      } else {
        const source = { uri: response.uri }
        setChannelImageHandler(source.uri)
      }
    })
  }
  const hideModalHandler = () => {
    setModalVisible(false)
  }
  const newTitleHandler = value => {
    setNewChannelTitle(value)
  }
  const onChangeTexthandler = value => {
    setInput({
      value,
      isEmpty: false
    })
  }
  const onPressXButtonHandler = () => {
    setInput({
      value: '',
      isEmpty: true
    })
  }
  const rightIconPressHandler = () => {
    setModalVisible(true)
  }
  const signOut = (refreshToken, refreshTokenId) => {
    sign_out({
      variables: { refreshToken, refreshTokenId },
      update: async (cache, { data }) => {
        const user = data.signOut.user
        const signedOut = data.signOut.signedOut
        if (user && signOut) {
          await Keychain.resetGenericPassword()
        }
      }
    }).then(() => navigation.navigate('Auth'))
  }
  const signOutHandler = async () => {
    const tokens = await Keychain.getGenericPassword()
    const keychainAccessToken = tokens.username
    const keychainRefreshToken = tokens.password
    const decodeAccessToken = jwtDecode(keychainAccessToken)
    signOut(keychainRefreshToken, decodeAccessToken.refreshTokenId)
  }
  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Confirm'],
        title: 'Sign Out',
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0
      },

      buttonIndex => {
        if (buttonIndex === 1) {
          signOutHandler()
        }
      }
    )
  }

  return (
    <View style={container}>
      <ScreenHeader
        header="Channels"
        leftIconName="ios-log-out"
        rightIconName="ios-add"
        onLeftIconPress={showActionSheet}
        onRightIconPress={rightIconPressHandler}
      />
      <SearchBar
        isEmpty={userInput.isEmpty}
        onChangeText={onChangeTexthandler}
        onPressXButton={onPressXButtonHandler}
        placeholder="Search channel..."
        value={userInput.value}
      />
      <ModalCard
        buttonAddPushed={newChannelImage.loading}
        descriptionNotice="You can provide an optional description for your channel."
        descriptionPlaceholder="Channel description..."
        descriptionValue={channelDescription}
        chooseImage={chooseChannelImageHandler}
        create={hideModalHandler}
        header="Channel"
        titleNotice="Please provide clear title for your channel (max 20 characters)."
        hideModal={hideModalHandler}
        image={newChannelImage.channelImage}
        onChange={newTitleHandler}
        onChangeDescription={changeDescriptionHandler}
        titleValue={newChannelTitle}
        titlePlaceholder="Channel title..."
        visible={isModalVisible}
      />

      <View style={{ alignItems: 'center' }}>
        <FlatList
          autoCorrect={false}
          data={channelData}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.image}
          numColumns={2}
          renderItem={({ item }) => (
            <ChannelItem
              channelItemHeader={item.header}
              imageSource={item.image}
              onPress={() => navigation.navigate(TOPICS_SCREEN)}
            />
          )}
        />
      </View>
    </View>
  )
}

export default ChannelsScreen
