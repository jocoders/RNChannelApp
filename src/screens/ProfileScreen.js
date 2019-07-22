import React from 'react'
import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { InterestsItem } from '../components'
import { data } from '../dataDraft'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconHeader: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  iconsContainer: {
    width: 250,
    height: 70,
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-end'
  },
  iconStyle: {
    alignSelf: 'center'
  },
  iconSubcontainer: {},
  imageBackgroundStyle: {
    width: '100%',
    height: 180
  },
  interestsContainer: {
    width: '100%',
    height: 160
  },
  interestsHeader: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 16,
    fontWeight: 'bold'
  },
  itemAvatarImage: {
    width: 100,
    height: 100,
    marginTop: -50,
    alignSelf: 'center',
    borderRadius: 50
  },
  profileCard: {
    width: '90%',
    height: 180,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginTop: -90,
    borderRadius: 10
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userNameStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10
  }
})

const ProfileScreen = ({ navigation }) => {
  const {
    container,
    iconHeader,
    iconStyle,
    iconsContainer,
    iconSubcontainer,
    interestsContainer,
    interestsHeader,
    imageBackgroundStyle,
    itemAvatarImage,
    profileCard,
    shadowStyle,
    subContainer,
    textStyle,
    userNameStyle
  } = styles
  return (
    <View style={[container, shadowStyle]}>
      <ImageBackground source={require('../img/marion-michele-330691-unsplash-min.jpg')} style={imageBackgroundStyle} />
      <View style={profileCard}>
        <Image source={require('../img/55.jpg')} style={itemAvatarImage} />
        <Text style={userNameStyle}>jocoders</Text>
        <View style={iconsContainer}>
          <View style={iconSubcontainer}>
            <Ionicons style={iconStyle} name="ios-stats" size={35} />
            <Text style={iconHeader}>129</Text>
          </View>
          <View style={iconSubcontainer}>
            <Ionicons style={iconStyle} name="md-chatboxes" size={35} />
            <Text style={iconHeader}>56</Text>
          </View>
          <View style={iconSubcontainer}>
            <Ionicons style={iconStyle} name="ios-star" size={35} />
            <Text style={iconHeader}>98</Text>
          </View>
        </View>
      </View>
      <Text style={interestsHeader}>Interests</Text>
      <View style={interestsContainer}>
        <FlatList
          data={data}
          autoCorrect={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={item => item.header}
          horizontal={true}
          renderItem={({ item }) => (
            <InterestsItem
              channelItemHeader={item.header}
              imageSource={item.image}
              onPress={() => navigation.navigate(console.log('InterestItem pressed'))}
            />
          )}
        />
      </View>
    </View>
  )
}

export { ProfileScreen }
