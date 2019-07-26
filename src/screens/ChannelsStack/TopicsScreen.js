import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { ModalCard, SearchBar, ScreenHeader, TopicItem } from '../../components'
import { fdata } from '../../dataDraft'
import { CHAT_SCREEN } from '../routes'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageTopicStyle: {
    width: 150,
    height: 150,
    borderRadius: 75
  }
})

const TopicsScreen = ({ navigation }) => {
  const { container, imageTopicStyle } = styles
  const [isModalVisible, setModalVisible] = useState(false)
  const [topicTitle, setTopicTitle] = useState('')
  const [userInput, setInput] = useState({
    value: '',
    isEmpty: true
  })
  const [topicImage, setTopicImage] = useState({
    image: null,
    loading: false
  })
  const setTopicImageHandler = source => {
    setTopicImage({
      image: source,
      loading: true
    })
  }
  const chooseTopicImageHandler = () => {
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
        setTopicImageHandler(source.uri)
      }
    })
  }
  const hideModalHandler = () => {
    setModalVisible(false)
  }
  const newTitleHandler = value => {
    setTopicTitle(value)
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
  const renderHeader = () => (
    <SearchBar
      isEmpty={userInput.isEmpty}
      onChangeText={onChangeTexthandler}
      onPressXButton={onPressXButtonHandler}
      placeholder="Search topic..."
      value={userInput.value}
    />
  )
  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        margin: 4,
        width: '100%',
        backgroundColor: '#ffffff'
      }}
    />
  )
  const rightIconPressHandler = () => {
    setModalVisible(true)
  }
  return (
    <View style={container}>
      <ScreenHeader
        header="Topics"
        leftIconName="ios-arrow-back"
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={rightIconPressHandler}
        rightIconName="ios-add"
      />
      <ModalCard
        buttonAddPushed={topicImage.loading}
        chooseImage={chooseTopicImageHandler}
        create={hideModalHandler}
        descriptionNotice="You can provide an optional description for your topic."
        header="Topic"
        hideModal={hideModalHandler}
        image={topicImage.image}
        imageTopicStyle={imageTopicStyle}
        noticeText="This is the notice"
        onChange={newTitleHandler}
        titleNotice="Please provide clear title for your topic (max 20 characters)."
        titlePlaceholder="Topic title..."
        titleValue={topicTitle}
        visible={isModalVisible}
      />
      <View style={{ justifyContent: 'center' }}>
        <FlatList
          autoCorrect={false}
          data={fdata}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.header}
          renderItem={({ item }) => (
            <TopicItem
              itemAvatarImage={item.itemAvatarImage}
              header={item.header}
              topic={item.topic}
              time={item.time}
              numberStars={item.commentsCount}
              onPress={() => navigation.navigate(CHAT_SCREEN)}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
        />
      </View>
    </View>
  )
}

export default TopicsScreen
