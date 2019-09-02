import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { getTracks, tracks } = useContext(TrackContext)

  return (
    <View>
      <NavigationEvents onWillFocus={getTracks} />
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackDetail', { item })}
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

export default TrackListScreen
