import React, { FC, ElementType, useRef, useEffect } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { getUserInfo } from '@/api/user'
import { useDispatch } from 'react-redux'
import { loadData } from '@/store/actions/user'

interface IProps extends Omit<RouteProps, 'component'> {
  component: ElementType;
}

const AuthRoute: FC<IProps> = ({
  component: Component,
  ...rest
}) => {
  const auth = useRef(false)
  const dispatch = useDispatch()

  const handleAuth = async () => {
    const res = await getUserInfo()
    if (res?.data?.code === 0) {
      auth.current = true
      res.data.data && dispatch(loadData(res.data.data))
    }
  }

  useEffect(() => {
    handleAuth()
  }, [auth])

  return (
    <Route
      {...rest}
      render={ props => auth ? <Component {...props} /> : <Redirect to="/login" />}
     />
  )
}

export default AuthRoute
