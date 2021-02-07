import { all, call, put, takeLatest } from 'redux-saga/effects'
import { register, RegisterState, UserInfo, login, update, getUserInfo } from '@/api/user'
import { errorMsg, authSuccess, loadData, logout } from '../actions/user'
import { REGISTER, LOGIN, UPDATE, GET_USERINFO } from '../types/user'

function * handleRegister ({ username, pwd, repeatpwd, type }: RegisterState) {
  if (!username || !pwd || !type) {
    return put(errorMsg('用户名和密码不能为空'))
  }
  if (pwd !== repeatpwd) {
    return put(errorMsg('两次输入的密码不一致'))
  }
  const res = yield call(register, { username, pwd, repeatpwd, type })
  if (res && res.status === 200 && res.data.code === 0) {
    put(authSuccess({ username, pwd, type }))
  } else {
    res?.data?.msg && put(errorMsg(res.data.msg))
  }
}

function * handleLogin ({ username, pwd }: UserInfo) {
  if (!username || !pwd) {
    return put(errorMsg('用户名和密码不能为空'))
  }
  const res = yield call(login, { username, pwd })
  if (res?.status === 200 && res?.data?.code === 0) {
    put(authSuccess(res.data.data))
  } else {
    res?.data?.msg && put(errorMsg(res.data.msg))
  }
}

function * handleUpdate (data: UserInfo) {
  const res = yield call(update, data)
  if (res?.status === 200 && res?.data?.code === 0) {
    put(authSuccess(res.data.data))
  } else {
    res?.data?.msg && put(errorMsg(res.data.msg))
  }
}

function * handleGetUserInfo () {
  const res = yield call(getUserInfo)
  if (res?.status === 200) {
    if (res.data?.code === 0) {
      put(loadData(res.data.data))
    } else {
      put(logout())
    }
  }
}

export default all([
  takeLatest(REGISTER, handleRegister),
  takeLatest(LOGIN, handleLogin),
  takeLatest(UPDATE, handleUpdate),
  takeLatest(GET_USERINFO, handleGetUserInfo)
])
