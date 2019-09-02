import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { Context as locationContext } from '../context/LocationContext'

const Map = () => {
  const { currentLocation, locations } = useContext(locationContext)

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
      {locations.length > 0 && (
        <Polyline coordinates={locations.map(location => location.coords)} />
      )}
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
