import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Context as locationContext } from '../context/LocationContext'

const Map = () => {
  const { currentLocation } = useContext(locationContext)

  if (currentLocation === null)
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}
      style={styles.map}
    >
      <Marker coordinate={currentLocation.coords} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map
