import ImagePicker from 'react-native-image-picker'

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
    }
  })
    return source
}

export default chooseTopicImageHandler
