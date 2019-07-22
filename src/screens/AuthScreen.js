import React, { useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native'
import { useMutation } from 'react-apollo-hooks'
import RNAccountKit from 'react-native-facebook-account-kit'
import * as Keychain from 'react-native-keychain'
import { SIGN_IN } from '../graphql/mutations'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const AuthScreen = ({ navigation }) => {
  //const [loading, setLoading] = useState(false)
  const sign = useMutation(SIGN_IN)
  const handleSignIn = code => {
    console.log('handleSignIn')
    console.log('code', code)
    sign({
      variables: { code },
      update: async (cache, { data }) => {
        const accessToken = data.signIn.accessToken
        const refreshToken = data.signIn.refreshToken
        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        await Keychain.setGenericPassword(accessToken, refreshToken)
      }
    }).then(() => navigation.navigate('App'))
  }

  const getToken = async () => {
    // setLoading(true)
    RNAccountKit.configure({
      responseType: 'code',
      initialPhoneCountryPrefix: '+7',
      initialPhoneNumber: '9855316514',
      defaultCountry: 'RU'
    })
    const payload = await RNAccountKit.loginWithPhone()
    console.log('payload.code', payload.code)
    handleSignIn(payload.code)
  }

  const { container } = styles
  return (
    <View style={container}>
      <Text>Put your phone number for Login</Text>
      <Button title="Login" onPress={getToken} />
    </View>
  )
}

export { AuthScreen }
