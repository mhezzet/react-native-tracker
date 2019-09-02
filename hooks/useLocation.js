import { useState } from 'react'
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location'

export default function() {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [subscriber, setSubscribere] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => setLocation(location)
      )
      setSubscribere(sub)
    } catch (err) {
      setError(err)
    }
  }

  const stopWatching = () => {
    subscriber.remove()
    setSubscribere(null)
  }

  return { location, error, startWatching, stopWatching }
}
