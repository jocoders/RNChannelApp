import React from 'react'
import { View, Button, Text } from 'react-native'
import { useMutation } from 'react-apollo-hooks'
import * as Keychain from 'react-native-keychain'
import jwtDecode from 'jwt-decode'
import { ScreenHeader } from '../../components'
import { UPDATE_TOKENS, SIGN_OUT } from '../../graphql/mutations'

const ChatFavoritesScreen = ({ navigation }) => {
  const update_tokens = useMutation(UPDATE_TOKENS)
  const sign_out = useMutation(SIGN_OUT)

  const updateTokens = (refreshToken, refreshTokenId) => {
    update_tokens({
      variables: { refreshToken, refreshTokenId },
      update: async (cache, { data }) => {
        const newAccessToken = data.updateTokens.accessToken
        const newRefreshToken = data.updateTokens.refreshToken
        const user = data.updateTokens.user
        await Keychain.setGenericPassword(newAccessToken, newRefreshToken)
      }
    }).then(() => console.log('We have new credentials'))
  }

  const signOut = (refreshToken, refreshTokenId) => {
    sign_out({
      variables: { refreshToken, refreshTokenId },
      update: async (cache, { data }) => {
        const user = data.signOut.user
        const signedOut = data.signOut.signedOut
        if (user && signOut) {
          await Keychain.resetGenericPassword()
        }
      }
    }).then(() => navigation.navigate('Auth'))
  }

  const getCredentials = async () => {
    try {
      const tokens = await Keychain.getGenericPassword()
      const keychainAccessToken = tokens.username
      const keychainRefreshToken = tokens.password
      const currentTime = Date.now() / 1000
      const decodeAccessToken = jwtDecode(keychainAccessToken)
      const keychainRefreshTokenId = decodeAccessToken.refreshTokenId
      if (decodeAccessToken.exp > currentTime) {
        console.log('Credentials is still valid')
      } else if (decodeAccessToken.exp < currentTime) {
        console.log('Go to Update!')
        updateTokens(keychainRefreshToken, keychainRefreshTokenId)
      }
    } catch (err) {
      throw new Error('Invalid credentials')
    }
  }

  const signOutHandler = async () => {
    const tokens = await Keychain.getGenericPassword()
    const keychainAccessToken = tokens.username
    const keychainRefreshToken = tokens.password
    const decodeAccessToken = jwtDecode(keychainAccessToken)
    signOut(keychainRefreshToken, decodeAccessToken.refreshTokenId)
  }

  const checkCredentials = async () => {
    const tokens = await Keychain.getGenericPassword()
    const keyChainAccessToken = tokens.username
    const keyChainRefreshToken = tokens.password
    console.log('keyChainAccessToken', keyChainAccessToken)
    console.log('keyChainRefreshToken', keyChainRefreshToken)
  }

  const fakeSignOut = async () => {
    await Keychain.resetGenericPassword()
    navigation.navigate('Auth')
  }

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader
        header="Chat"
        leftIconName="ios-arrow-back"
        rightIconName="ios-add"
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => console.log('Right icon pressed')}
      />
      <Text>Home Screen</Text>
      <Button title="updateTokens" onPress={getCredentials} />
      <Button title="getCredentials" onPress={checkCredentials} />
      <Button title="SignOut" onPress={signOutHandler} />
    </View>
  )
}
export default ChatFavoritesScreen
