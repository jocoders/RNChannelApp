import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { ModalCard, SearchBar, ScreenHeader, TopicItem } from '../../components'
import { fdata } from '../../dataDraft'
import { CHAT_SCREEN } from '../routes'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subContainer: {}
})

const TopicsScreen = ({ navigation }) => {
  const { container, subContainer, textStyle } = styles
  const [isModalVisible, setModalVisible] = useState(false)
  const [newTopicTitle, setNewTopicTitle] = useState('')
  const [userInput, setInput] = useState({
    value: '',
    isEmpty: true
  })
  const [newTopicImage, setNewTopicImage] = useState({
    image: null,
    loading: false
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
  const setTopicImageHandler = source => {
    setNewTopicImage({
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
  const renderHeader = () => (
    <SearchBar
      value={userInput.value}
      placeholder="Search topic..."
      isEmpty={userInput.isEmpty}
      onChangeText={onChangeTexthandler}
      onPressXButton={onPressXButtonHandler}
    />
  )
  const rightIconPressHandler = () => {
    setModalVisible(true)
  }
  const newTitleHandler = value => {
    setNewTopicTitle(value)
  }
  return (
    <View style={container}>
      <ScreenHeader
        header="Topics"
        leftIconName="ios-arrow-back"
        rightIconName="ios-add"
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={rightIconPressHandler}
      />
      <ModalCard
        buttonAddPushed={newTopicImage.loading}
        header="Topic"
        image={newTopicImage.image}
        chooseImage={chooseTopicImageHandler}
        create={hideModalHandler}
        hideModal={hideModalHandler}
        noticeText="This is the notice"
        onChange={newTitleHandler}
        titleValue={newTopicTitle}
        visible={isModalVisible}
      />
      <View style={{ justifyContent: 'center' }}>
        <FlatList
          data={fdata}
          autoCorrect={false}
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
