import React from 'react'
import { View, Text, Button } from 'react-native'

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title='signin' onPress={() => navigation.navigate('Signin')} />
      <Button
        title='go to main flow'
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  )
}

export default SignUpScreen
