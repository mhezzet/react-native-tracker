import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import { Context as locationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
import Spacer from './Spacer'

const TrackForm = () => {
  const {
    changeName,
    name,
    startRecording,
    stopRecording,
    recording,
    locations
  } = useContext(locationContext)
  const saveTrack = useSaveTrack()

  return (
    <>
      <Spacer />
      <Input value={name} onChangeText={changeName} label='Name' />
      <Spacer>
        {recording ? (
          <Button onPress={stopRecording} title='Stop Recording' />
        ) : (
          <Button onPress={startRecording} title='Start Recording' />
        )}
      </Spacer>
      <Spacer>
        {locations.length > 1 && !recording && (
          <Button onPress={saveTrack} title='Save Recording' />
        )}
      </Spacer>
    </>
  )
}

export default TrackForm
