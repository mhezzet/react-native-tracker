import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const Signform = ({
  navigation,
  onSubmit,
  type,
  errorMessage,
  loading,
  title
}) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const textChangeHandler = name => text =>
    setForm(f => ({ ...f, [name]: text }))

  return (
    <>
      <Spacer margin={20}>
        <Text h3 style={{ textAlign: 'center' }}>
          {title}
        </Text>
      </Spacer>
      <Input
        value={form.email}
        onChangeText={textChangeHandler('email')}
        label='Email'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='emailAddress'
      />
      <Spacer />
      <Input
        value={form.password}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={textChangeHandler('password')}
        label='password'
        secureTextEntry
      />
      <Spacer />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          disabled={loading}
          onPress={() => onSubmit(form)}
          title={
            loading ? 'loading...' : type === 'Signin' ? 'sign in' : 'sign up'
          }
        />
      </Spacer>
      <Button
        containerStyle={{ alignSelf: 'center' }}
        onPress={() =>
          navigation.navigate(type === 'Signin' ? 'Signup' : 'Signin')
        }
        title={
          type === 'Signin'
            ? 'not a member? sign up'
            : 'already a member? sign in'
        }
        type='clear'
      />
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center'
  }
})

export default Signform
