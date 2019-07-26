import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import { useMutation } from 'react-apollo-hooks'
import RNAccountKit from 'react-native-facebook-account-kit'
import * as Keychain from 'react-native-keychain'
import { SIGN_IN } from '../graphql/mutations'
import { BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    //backgroundColor: BLUE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {},
  loginText: {
    color: BLUE,
    marginTop: 3
  },
  logo: {
    color: BLUE,
    fontSize: 32,
    fontWeight: 'bold'
  }
})

const AuthScreen = ({ navigation }) => {
  const { container, logo, loginContainer, loginText, logoContainer } = styles
  const [loading, setLoading] = useState(false)
  const sign = useMutation(SIGN_IN)
  const handleSignIn = code => {
    try {
      sign({
        variables: { code },
        update: async (cache, { data }) => {
          const accessToken = data.signIn.accessToken
          const refreshToken = data.signIn.refreshToken
          await Keychain.setGenericPassword(accessToken, refreshToken)
        }
      }).then(() => navigation.navigate('App'), setLoading(false))
    } catch (error) {
      throw new Error()
    }
  }

  const getToken = async () => {
    RNAccountKit.configure({
      responseType: 'code',
      initialPhoneCountryPrefix: '+7',
      initialPhoneNumber: '9855316514',
      defaultCountry: 'RU'
    })
    const payload = await RNAccountKit.loginWithPhone()
    console.log('payload.code', payload.code)
    handleSignIn(payload.code)
    setLoading(true)
  }

  return (
    <View style={container}>
      <View style={logoContainer}>
        <Text style={logo}>CHANNELBOTICS</Text>
      </View>
      <View style={loginContainer}>
        <Text style={loginText}>Just put your phone number for Login</Text>
        <Button style={{ marginTop: 3 }} color="#FF375F" title="Let's go" onPress={getToken} />
      </View>
      <ActivityIndicator animating={loading} color={BLUE} size="large" />
    </View>
  )
}

export { AuthScreen }
