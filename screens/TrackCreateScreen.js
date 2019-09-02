import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import useLocation from '../hooks/useLocation'
import { Context as locationContext } from '../context/LocationContext'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, recording } = useContext(locationContext)
  const { location, startWatching, stopWatching, error } = useLocation()

  useEffect(() => {
    addLocation(location, recording)
  }, [location, recording])

  useEffect(() => {
    if (isFocused || recording) startWatching()
    else stopWatching()
    return () => stopWatching()
  }, [isFocused, recording])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <KeyboardAvoidingView behavior='position' enabled>
        <Text h3 style={styles.header}>
          Create a Track
        </Text>
        <Map />
        {error && (
          <Text style={{ textAlign: 'center' }}>
            please enable location services
          </Text>
        )}
        <TrackForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
})

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />
}

export default withNavigationFocus(TrackCreateScreen)
