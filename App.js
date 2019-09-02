import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome } from '@expo/vector-icons'
import AccountScreen from './screens/AccountScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import TrackCreateScreen from './screens/TrackCreateScreen'
import TrackDetailScreen from './screens/TrackDetailScreen'
import TrackListScreen from './screens/TrackListScreen'
import LoadingScreen from './screens/LoadingScreen'
import { Provider as AuthProvider } from './context/AuthContext'
import { Provider as LocationProvider } from './context/LocationContext'
import { Provider as TrackContext } from './context/TrackContext'
import { setNavigator } from './navigator'

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
}

const switchNavigator = createSwitchNavigator({
  loading: LoadingScreen,
  loginFlow: createStackNavigator(
    {
      Signup: SignUpScreen,
      Signin: SignInScreen
    },
    {
      headerMode: 'none'
    }
  ),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => (
  <TrackContext>
    <LocationProvider>
      <AuthProvider>
        <App ref={navigator => setNavigator(navigator)} />
      </AuthProvider>
    </LocationProvider>
  </TrackContext>
)
