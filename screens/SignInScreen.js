import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { Context as authContext } from '../context/AuthContext'
import Signform from '../components/Signform'

const SignInScreen = ({ navigation }) => {
  const { signup, errorMessage, loading } = useContext(authContext)

  return (
    <View style={styles.container}>
      <Signform
        title='Sign In for Tracker'
        errorMessage={errorMessage}
        navigation={navigation}
        onSubmit={signup}
        loading={loading}
        type='Signin'
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

export default SignInScreen
