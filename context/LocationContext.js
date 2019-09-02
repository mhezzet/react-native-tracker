import createDataContext from './createDataContext'
import { navigate } from '../navigator'

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null
}

//reducer
const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_location':
      return { ...state, currentLocation: action.payload }
    default:
      return state
  }
}

//actions
const startRecording = dispatch => () => {}
const stopRecording = dispatch => () => {}
const addLocation = dispatch => location => {
  dispatch({ type: 'add_location', payload: location })
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  initialState
)
