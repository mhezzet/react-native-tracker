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
import LoadingScreen from './screens/LoadingScreen'
import { setNavigator } from './navigator'

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
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => (
  <AuthProvider>
    <App ref={navigator => setNavigator(navigator)} />
  </AuthProvider>
)
