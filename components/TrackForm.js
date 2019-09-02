import React from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'

const TrackForm = () => {
  return (
    <>
      <Spacer />
      <Input label='Name' />
      <Spacer />
      <Spacer>
        <Button title='Start Recording' />
      </Spacer>
    </>
  )
}

export default TrackForm
