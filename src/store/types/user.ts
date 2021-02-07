export interface User {
  isAuth: boolean;
  username: string;
  msg: string;
  type: string;
  redirectTo: string;
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS'

export const ERROR_MSG = 'ERROR_MSG'

export const LOAD_DATA = 'LOAD_DATA'

export const LOGOUT = 'LOGOUT'

export const REGISTER = 'REGISTER'

export const LOGIN = 'LOGIN'

export const UPDATE = 'UPDATE'

export const GET_USERINFO = 'GET_USERINFO'

export interface AuthSuccessResponse {
  pwd: string;
  username: string;
  type: string;
}
