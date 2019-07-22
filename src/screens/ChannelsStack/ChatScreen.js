import React, { useState } from 'react'
import { View, Button, FlatList, Text, StyleSheet } from 'react-native'
import { ChatItem, MessageInput, ChatHeader } from '../../components'
import { mdata } from '../../dataDraft'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})

const ChatScreen = ({ navigation }) => {
  const { container, textStyle } = styles
  const [message, setMessage] = useState(null)
  const attachHandler = () => {
    console.log('Attach button pushed')
  }
  const onChangeText = value => {
    setMessage(value)
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
  const sentHandler = () => {
    setMessage(null)
  }

  return (
    <View style={container}>
      <ChatHeader
        channelImage={require('../../img/alexandre-debieve-561298-unsplash-min.jpg')}
        header="Which the best way to make a shadow in React Native?"
        leftIconName="ios-arrow-back"
        onLeftIconPress={() => navigation.goBack()}
        onChannelImagePress={() => console.log('Right icon pressed')}
      />
      <FlatList
        data={mdata}
        inverted={true}
        autoCorrect={false}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatItem itemAvatarImage={item.image} messageTime={item.time} value={item.message} />
        )}
        ItemSeparatorComponent={renderSeparator}
      />
      <MessageInput
        attachIconPress={attachHandler}
        onChangeText={onChangeText}
        sentIconPress={sentHandler}
        value={message}
      />
    </View>
  )
}
export default ChatScreen
