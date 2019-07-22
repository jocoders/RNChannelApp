import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLUE } from '../constants'

export const styles = StyleSheet.create({
  avatarImageStyle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'black'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 30,
    borderRadius: 10,
    backgroundColor: BLUE
  },
  container: {
    flexDirection: 'column',
    padding: 10,
    height: 105,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  headerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  itemButton: {
    flex: 3,
    alignSelf: 'flex-end',
    //justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemHeader: {
    flex: 4,
    marginLeft: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  itemTime: {
    flex: 1
  },
  itemBlock: {
    flex: 1,
    justifyContent: 'center'
  },
  itemStars: {
    flex: 2,
    marginTop: 5,
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  subHeader: {
    flex: 2
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  subContainerUp: {
    width: '100%',
    height: '60%',
    flexDirection: 'row'
  },
  subContainerDown: {
    width: '100%',
    height: '40%',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 25,
    color: '#ffffff'
  },
  textHeaderStyle: {
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  textStarStyle: {
    alignSelf: 'center',
    marginLeft: 4,
    fontSize: 15
  },
  timeStyle: {
    //flex: 1,
    alignSelf: 'flex-end',
    paddingTop: 4,
    fontSize: 10
  },
  timeBlock: {
    flex: 2
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
    itemImage,
    itemHeader,
    itemTime,
    itemBlock,
    itemStars,
    itemButton,
    textStarStyle,
    subHeader,
    shadowStyle,
    subContainerUp,
    subContainerDown,
    textHeaderStyle,
    textButtonStyle,
    timeStyle,
    timeBlock
  } = styles
  const { header, itemAvatarImage, onIconStarPress, onPress, numberStars, topic, time } = props
  //  const item = (
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
        <View style={itemTime}>
          <Text style={timeStyle}>{time}</Text>
          <View style={timeBlock} />
        </View>
      </View>
      <View style={subContainerDown}>
        <View style={itemBlock} />
        <View style={itemStars}>
          <TouchableOpacity onPress={onIconStarPress}>
            <Icon name="star" color="#ffd700" size={30} />
          </TouchableOpacity>
          <Text style={textStarStyle}>{numberStars}</Text>
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
