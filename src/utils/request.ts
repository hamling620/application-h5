import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api',
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  // show loading
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

const request = (options: AxiosRequestConfig) => {
  return instance(options)
}

export default request
