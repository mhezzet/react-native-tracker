import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as authContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(authContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48, textAlign: 'center' }}>account screen</Text>
      <Spacer margin={20}>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

export default AccountScreen
