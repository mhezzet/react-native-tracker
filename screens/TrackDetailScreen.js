import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation }) => {
  const item = navigation.getParam('item')
  console.log(item)
  return (
    <View>
      <MapView
        initialRegion={{
          ...item.locations[0],
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={styles.map}
      >
        {item.locations.length > 0 && <Polyline coordinates={item.locations} />}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

TrackDetailScreen.navigationOptions = options => ({
  title: options.navigation.state.params.item.name
})

export default TrackDetailScreen
