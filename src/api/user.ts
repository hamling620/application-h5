import axios from 'axios'
axios.defaults.baseURL = '/api'
export interface UserBaseInfo {
  username: string;
  pwd: string;
}

interface UserType {
  type: string;
}

interface RepeatPwd {
  repeatpwd: string;
}

export type UserInfo = UserBaseInfo & UserType

export type RegisterState = UserBaseInfo & UserType & RepeatPwd

export const register = async ({ username, pwd, repeatpwd, type } : RegisterState) => {
  return await axios.post('/user/register', { username, pwd, repeatpwd, type })
}

export const login = async ({ username, pwd }: UserBaseInfo) => {
  return await axios.post('/user/login', { username, pwd })
}

export const update = async (data: UserInfo) => {
  return await axios.post('/user/update', data)
}

export const getUserInfo = async () => {
  return await axios.get('/user/info')
}
