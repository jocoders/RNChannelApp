import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
    height: 30,
    justifyContent: 'center',
    width: '70%'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
    height: 105,
    justifyContent: 'center',
    padding: 10,
    width: '100%'
  },
  headerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  itemButton: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    flex: 3
  },
  itemImage: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  itemHeader: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 2
  },
  itemTime: {
    flex: 1
  },
  itemBlock: {
    flex: 1,
    justifyContent: 'center'
  },
  itemStars: {
    alignSelf: 'flex-start',
    flex: 2,
    flexDirection: 'row',
    marginTop: 5
  },
  subHeader: {
    flex: 2
  },
  shadowStyle: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  subContainerUp: {
    flexDirection: 'row',
    height: '60%',
    width: '100%'
  },
  subContainerDown: {
    flexDirection: 'row',
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
  timeStyle: {
    alignSelf: 'flex-end',
    fontSize: 10,
    paddingTop: 4
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
