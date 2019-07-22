import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { ChannelItem, ModalCard, SearchBar, ScreenHeader } from '../../components'
import { data } from '../../dataDraft'
import { TOPICS_SCREEN } from '../routes'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})

const ChannelsScreen = ({ navigation }) => {
  const { container, textStyle } = styles
  const [isModalVisible, setModalVisible] = useState(false)
  const [newChannelImage, setNewChannelImage] = useState({
    channelImage: null,
    loading: false
  })
  const [newChannelTitle, setNewChannelTitle] = useState('')
  const [userInput, setInput] = useState({
    value: '',
    isEmpty: true
  })
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
  const hideModalHandler = () => {
    setModalVisible(false)
  }
  const setChannelImageHandler = source => {
    setNewChannelImage({
      channelImage: source,
      loading: true
    })
  }
  const rightIconPressHandler = () => {
    setModalVisible(true)
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

  const newTitleHandler = value => {
    setNewChannelTitle(value)
  }
  return (
    <View style={container}>
      <ScreenHeader header="Channels" rightIconName="ios-add" onRightIconPress={rightIconPressHandler} />
      <SearchBar
        value={userInput.value}
        placeholder="Search channel..."
        isEmpty={userInput.isEmpty}
        onChangeText={onChangeTexthandler}
        onPressXButton={onPressXButtonHandler}
      />
      <ModalCard
        buttonAddPushed={newChannelImage.loading}
        header="Channel"
        image={newChannelImage.channelImage}
        chooseImage={chooseChannelImageHandler}
        create={hideModalHandler}
        hideModal={hideModalHandler}
        noticeText="This is the notice"
        onChange={newTitleHandler}
        titleValue={newChannelTitle}
        visible={isModalVisible}
      />

      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={data}
          numColumns={2}
          autoCorrect={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.image}
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
