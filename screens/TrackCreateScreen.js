import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import useLocation from '../hooks/useLocation'
import { Context as locationContext } from '../context/LocationContext'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(locationContext)
  const { location, startWatching, stopWatching, error } = useLocation()

  useEffect(() => {
    addLocation(location)
  }, [location])

  useEffect(() => {
    if (isFocused) startWatching()
    else stopWatching()
  }, [isFocused])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
})

export default withNavigationFocus(TrackCreateScreen)
