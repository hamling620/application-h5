import { all, call, put, takeLatest } from 'redux-saga/effects'
import { register, RegisterState, UserInfo, login, update } from '@/api/user'
import { errorMsg, authSuccess } from '../actions/user'
import { REGISTER, LOGIN, UPDATE } from '../types/user'

function * handleRegister ({ username, pwd, repeatpwd, type }: RegisterState) {
  if (!username || !pwd || !type) {
    yield put(errorMsg('用户名和密码不能为空'))
    return
  }
  if (pwd !== repeatpwd) {
    yield put(errorMsg('两次输入的密码不一致'))
    return
  }
  const res = yield call(register, { username, pwd, repeatpwd, type })
  if (res.data.code === 0) {
    yield put(authSuccess({ username, pwd, type }))
  } else {
    res?.data?.msg && put(errorMsg(res.data.msg))
  }
}

function * handleLogin ({ username, pwd }: UserInfo) {
  if (!username || !pwd) {
    yield put(errorMsg('用户名和密码不能为空'))
    return
  }
  const res = yield call(login, { username, pwd })
  if (res?.data?.code === 0) {
    yield put(authSuccess(res.data.data))
  } else {
    res?.data?.msg && put(errorMsg(res.data.msg))
  }
}

function * handleUpdate (data: UserInfo) {
  const res = yield call(update, data)
  if (res?.data?.code === 0) {
    yield put(authSuccess(res.data.data))
  } else {
    res?.data?.msg && put(errorMsg(res.data.msg))
  }
}

export default all([
  takeLatest(REGISTER, handleRegister),
  takeLatest(LOGIN, handleLogin),
  takeLatest(UPDATE, handleUpdate)
])
