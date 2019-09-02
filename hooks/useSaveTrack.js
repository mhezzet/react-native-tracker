import { useContext, useCallback } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { Context as TrackContext } from '../context/TrackContext'

const useSaveTrack = () => {
  const { createTrack } = useContext(TrackContext)
  const { locations, name, reset } = useContext(LocationContext)

  const saveTrack = useCallback(async () => {
    await createTrack(name, locations)
    reset()
  }, [name, locations])

  return saveTrack
}

export default useSaveTrack
