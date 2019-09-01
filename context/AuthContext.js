import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigator'

console.log(trackerApi)

const initialState = {
  errorMessage: '',
  loading: false,
  token: null
}

//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'set_error':
      return { ...state, errorMessage: action.payload }
    case 'set_loading':
      return { ...state, loading: action.payload }
    case 'set_token':
      return { ...state, token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }

    default:
      return state
  }
}

//actions
const signinLocal = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (!token) return navigate('Signup')

  dispatch({ type: 'set_token', payload: token })
  navigate('TrackList')
}

const signup = dispatch => ({ email, password }) => {
  dispatch({ type: 'set_loading', payload: true })
  trackerApi
    .post('/signup', { email, password })
    .then(({ data }) =>
      AsyncStorage.setItem('token', data.token).then(() => {
        dispatch({ type: 'set_token', payload: data.token })
        dispatch({
          type: 'set_error',
          payload: ''
        })
        dispatch({ type: 'set_loading', payload: false })
        navigate('mainFlow')
      })
    )
    .catch(err => {
      dispatch({ type: 'set_loading', payload: false })
      dispatch({
        type: 'set_error',
        payload: 'Something went wrong with sign up'
      })
    })
}

const signin = dispatch => ({ email, password }) => {
  dispatch({ type: 'set_loading', payload: true })
  trackerApi
    .post('/signin', { email, password })
    .then(({ data }) =>
      AsyncStorage.setItem('token', data.token).then(() => {
        dispatch({ type: 'set_token', payload: data.token })
        dispatch({
          type: 'set_error',
          payload: ''
        })
        dispatch({ type: 'set_loading', payload: false })
        navigate('mainFlow')
      })
    )
    .catch(err => {
      dispatch({ type: 'set_loading', payload: false })
      dispatch({
        type: 'set_error',
        payload: 'Something went wrong with sign in'
      })
    })
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'set_token', payload: null })
  navigate('loginFlow')
}

const clearErrorMessage = dispatch => () =>
  dispatch({ type: 'clear_error_message' })

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, signinLocal },
  initialState
)
