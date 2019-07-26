import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BLUE } from '../constants'

export const styles = StyleSheet.create({
  avatarImageStyle: {
    backgroundColor: 'black',
    borderRadius: 44 / 2,
    height: 44,
    width: 44
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: BLUE,
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
    width: '70%'
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 4,
    justifyContent: 'space-between'
  },
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
    height: 105,
    justifyContent: 'center',
    padding: 10,
    width: '92%'
  },
  headerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  itemAdd: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 5
  },
  itemButton: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    width: 150
  },
  itemImage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    maxWidth: '80%'
  },
  itemBlock: {
    flex: 1,
    justifyContent: 'center'
  },
  itemStars: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 5
  },
  subHeader: {
    flex: 2
  },
  shadowStyle: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65
  },
  subContainerUp: {
    flexDirection: 'row',
    height: '60%',
    width: '100%'
  },
  subContainerDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '40%',
    width: '100%'
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 25
  },
  textHeaderStyle: {
    flexDirection: 'row',
    fontWeight: 'bold'
  },
  textStarStyle: {
    alignSelf: 'center',
    fontSize: 15,
    marginLeft: 4
  },
  textButtonStyle: {
    color: '#586589',
    fontSize: 8,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5
  }
})
const TopicItem = props => {
  const {
    avatarImageStyle,
    buttonStyle,
    container,
    headerMain,
    itemAdd,
    itemImage,
    itemHeader,
    itemStars,
    itemButton,
    textStarStyle,
    subHeader,
    shadowStyle,
    subContainerUp,
    subContainerDown,
    textHeaderStyle,
    textButtonStyle
  } = styles
  const { header, itemAvatarImage, onIconAddPress, onIconStarPress, onPress, numberStars, topic } = props
  return (
    <View style={[container, shadowStyle]}>
      <View style={subContainerUp}>
        <View style={itemImage}>
          <Image style={avatarImageStyle} resizeMode="stretch" source={itemAvatarImage} />
        </View>
        <View style={itemHeader}>
          <View style={headerMain}>
            <Text style={textHeaderStyle}>Channel: </Text>
            <Text>{header}</Text>
          </View>
          <View style={subHeader}>
            <Text style={textHeaderStyle}>Topic: {topic}</Text>
          </View>
        </View>
      </View>
      <View style={subContainerDown}>
        <View style={itemStars}>
          <TouchableOpacity onPress={onIconStarPress}>
            <Icon name="ios-star" color="#ffd700" size={30} />
          </TouchableOpacity>
          <Text style={textStarStyle}>{numberStars}</Text>
        </View>

        <View style={itemAdd}>
          <TouchableOpacity onPress={onIconAddPress}>
            <Icon name="ios-flower" color="#ff8c00" size={30} />
          </TouchableOpacity>
          <Text style={textStarStyle}>Add</Text>
        </View>

        <TouchableOpacity style={itemButton} onPress={onPress}>
          <View style={buttonStyle}>
            <Text style={textButtonStyle}>JOIN CONVERSATION</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopicItem
