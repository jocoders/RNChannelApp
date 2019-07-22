import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { AuthScreen, ProfileScreen } from './screens'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import ChannelsStack from './screens/ChannelsStack'
import FavoritesStack from './screens/FavoritesStack'
import { BLUE, PROJECT_FONT } from './constants'

const AuthStack = createStackNavigator({ AUTH_SCREEN: AuthScreen })
const AppStack = createBottomTabNavigator(
  {
    CHANNELS_STACK: {
      screen: ChannelsStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Ionicons style={{ color: tintColor }} name="ios-stats" size={30} />,
        tabBarLabel: 'Channels'
      })
    },
    FAVORITES_STACK: {
      screen: FavoritesStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Ionicons style={{ color: tintColor }} name="ios-flower" size={30} />,
        tabBarLabel: 'Favorites'
      })
    },
    PROFILE_SCREEN: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Ionicons style={{ color: tintColor }} name="ios-body" size={30} />,
        tabBarLabel: 'Profile'
      })
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      lazy: true,
      activeTintColor: BLUE,
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#ffffff'
      },
      labelStyle: {
        fontSize: 15,
        fontFamily: PROJECT_FONT,
        fontWeight: 'bold'
      }
    }
  }
)

AppStack.navigationOptions = {
  header: null
}

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)

export default AppNavigator
