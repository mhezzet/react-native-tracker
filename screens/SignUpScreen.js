import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { NavigationEvents } from 'react-navigation'
import { Context as authContext } from '../context/AuthContext'
import Signform from '../components/Signform'

const SignUpScreen = ({ navigation }) => {
  const { signup, errorMessage, loading, clearErrorMessage } = useContext(
    authContext
  )

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Signform
        title='Sign Up for Tracker'
        errorMessage={errorMessage}
        navigation={navigation}
        onSubmit={signup}
        loading={loading}
        type='Signup'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    flexGrow: 1,
    marginBottom: '30%'
  }
})

export default SignUpScreen
