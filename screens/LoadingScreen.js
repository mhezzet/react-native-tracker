import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { Context as authContext } from '../context/AuthContext'

const LoadingScreen = () => {
  const { signinLocal } = useContext(authContext)

  useEffect(() => {
    signinLocal()
  }, [])

  return (
    <View
      style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Loading...</Text>
    </View>
  )
}

export default LoadingScreen
