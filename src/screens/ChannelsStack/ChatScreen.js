import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ChatHeader, ChatItem, MessageInput } from '../../components'
import { CHANNEL_CARD_SCREEN } from '../routes'
import { mdata } from '../../dataDraft'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const ChatScreen = ({ navigation }) => {
  const { container } = styles
  const [message, setMessage] = useState(null)
  const attachHandler = () => {
    console.log('Attach button pushed')
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
  const onChangeText = value => {
    setMessage(value)
  }
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
        onChannelImagePress={() => navigation.navigate(CHANNEL_CARD_SCREEN)}
      />
      <FlatList
        autoCorrect={false}
        data={mdata}
        inverted={true}
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
