import { createStackNavigator } from 'react-navigation'
import ChannelsScreen from './ChannelsScreen'
import ChatScreen from './ChatScreen'
import TopicsScreen from './TopicsScreen'

import { CHAT_SCREEN, CHANNELS_SCREEN, TOPICS_SCREEN } from '../routes'

const ChannelsStack = createStackNavigator(
  {
    [CHANNELS_SCREEN]: ChannelsScreen,
    [TOPICS_SCREEN]: TopicsScreen,
    [CHAT_SCREEN]: ChatScreen
  },
  {
    headerMode: 'none'
  }
)

ChannelsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  return {
    tabBarVisible
  }
}

export default ChannelsStack
