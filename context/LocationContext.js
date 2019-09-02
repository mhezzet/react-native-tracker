import createDataContext from './createDataContext'
import { navigate } from '../navigator'

const initialState = {
  name: '',
  recording: false,
  locations: [],
  currentLocation: null
}

//reducer
const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_location':
      return { ...state, currentLocation: action.payload }
    case 'start_recording':
      return { ...state, recording: true }
    case 'stop_recording':
      return { ...state, recording: false }
    case 'set_name':
      return { ...state, name: action.payload }
    case 'push_location':
      return { ...state, locations: [...state.locations, action.payload] }
    case 'reset':
      return { ...initialState, currentLocation: state.currentLocation }
    default:
      return state
  }
}

//actions
const startRecording = dispatch => () => dispatch({ type: 'start_recording' })
const stopRecording = dispatch => () => dispatch({ type: 'stop_recording' })
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: 'add_location', payload: location })
  if (recording) dispatch({ type: 'push_location', payload: location })
}
const changeName = dispatch => name =>
  dispatch({ type: 'set_name', payload: name })

const reset = dispatch => () => {
  dispatch({ type: 'reset' })
  navigate('TrackList')
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  initialState
)
