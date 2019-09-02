import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigator'

const initialState = {
  tracks: []
}

//reducer
const trackReducer = (state, action) => {
  switch (action.type) {
    case 'set_tracks':
      return { tracks: action.payload }
    default:
      return state
  }
}

//actions
const getTracks = dispatch => async () => {
  const { data } = await trackerApi.get('/tracks')
  dispatch({ type: 'set_tracks', payload: data })
}
const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', {
    name,
    locations: locations.map(location => ({
      ...location.coords
    }))
  })
}

export const { Context, Provider } = createDataContext(
  trackReducer,
  { getTracks, createTrack },
  initialState
)
