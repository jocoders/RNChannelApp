import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'
import * as Keychain from 'react-native-keychain'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await Keychain.getGenericPassword()
      console.log('data', data)
      navigation.navigate(data ? 'App' : 'Auth')
    }
    fetchData()
  }, [])

  const { container } = styles
  return (
    <View style={container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}

export default AuthLoadingScreen 
