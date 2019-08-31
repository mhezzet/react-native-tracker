import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './screens/AccountScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import TrackCreateScreen from './screens/TrackCreateScreen'
import TrackDetailScreen from './screens/TrackDetailScreen'
import TrackListScreen from './screens/TrackListScreen'
import { Provider as AuthProvider } from './context/AuthContext'
import { setNavigator } from './navigator'

const switchNavigator = createSwitchNavigator({
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
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    })
  })
})

const App = createAppContainer(switchNavigator)

export default () => (
  <AuthProvider>
    <App ref={navigator => setNavigator(navigator)} />
  </AuthProvider>
)
