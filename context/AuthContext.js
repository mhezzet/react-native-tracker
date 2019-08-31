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

    default:
      return state
  }
}

//actions
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

const signin = dispatch => ({ email, password }) => {}

const signout = dispatch => () => {}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  initialState
)
