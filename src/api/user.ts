import request from '@/utils/request'

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
  return await request({
    url: '/user/register',
    method: 'post',
    data: { username, pwd, repeatpwd, type }
  })
}

export const login = async ({ username, pwd }: UserBaseInfo) => {
  return await request({
    url: '/user/login',
    method: 'post',
    data: { username, pwd }
  })
}

export const update = async (data: UserInfo) => {
  return await request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export const getUserInfo = async () => {
  return await request({
    url: '/user/info',
    method: 'get'
  })
}
