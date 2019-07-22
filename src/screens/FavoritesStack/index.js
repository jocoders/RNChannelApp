import { createStackNavigator } from 'react-navigation'
import FavoritesScreen from './FavoritesScreen'
import ChatFavoritesScreen from './ChatFavoritesScreen'

import { FAVORITES_SCREEN, CHAT_FAVORITES_SCREEN } from '../routes'

const FavoritesStack = createStackNavigator(
  {
    [FAVORITES_SCREEN]: FavoritesScreen,
    [CHAT_FAVORITES_SCREEN]: ChatFavoritesScreen
  },
  {
    headerMode: 'none'
  }
)

FavoritesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  return {
    tabBarVisible
  }
}

export default FavoritesStack
