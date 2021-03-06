import { createStackNavigator } from 'react-navigation'
import ChannelsScreen from './ChannelsScreen'
import ChannelCardScreen from './ChannelCardScreen'
import ChatScreen from './ChatScreen'
import TopicsScreen from './TopicsScreen'

import { CHAT_SCREEN, CHANNELS_SCREEN, CHANNEL_CARD_SCREEN, TOPICS_SCREEN } from '../routes'

const ChannelsStack = createStackNavigator(
  {
    [CHANNELS_SCREEN]: ChannelsScreen,
    [TOPICS_SCREEN]: TopicsScreen,
    [CHAT_SCREEN]: ChatScreen,
    [CHANNEL_CARD_SCREEN]: ChannelCardScreen
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
