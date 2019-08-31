import React from 'react'
import { View, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title='go to track detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  )
}

export default TrackListScreen
