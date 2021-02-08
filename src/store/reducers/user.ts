import { Reducer } from 'redux'
import { User, AUTH_SUCCESS, ERROR_MSG, LOAD_DATA, LOGOUT } from '../types/user'
import { getRedirectPath } from '@/utils'

const initialState: User = {
  username: '',
  msg: '',
  type: '',
  redirectTo: ''
}

const reducer: Reducer<User> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        msg: 'success',
        redirectTo: getRedirectPath({
          type: action.payload.type,
          avatar: action.payload.avatar
        }),
        ...action.payload
      }
    case LOAD_DATA:
      return {
        ...state,
        ...action.payload
      }
    case ERROR_MSG:
      return {
        ...state,
        msg: action.msg
      }
    case LOGOUT:
      return {
        ...state,
        redirectTo: '/login'
      }
    default:
      return state
  }
}

export default reducer
