import { AUTH_SUCCESS, AuthSuccessResponse, ERROR_MSG, LOAD_DATA, LOGOUT } from '../types/user'

export const authSuccess = (data: AuthSuccessResponse) => {
  const { pwd, ...payload } = data
  return {
    type: AUTH_SUCCESS,
    payload
  }
}

export const errorMsg = (msg: string) => ({
  type: ERROR_MSG,
  msg
})

export const loadData = (userinfo: any) => ({
  type: LOAD_DATA,
  payload: userinfo
})

export const logout = () => ({
  type: LOGOUT
})
