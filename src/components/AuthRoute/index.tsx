import React, { FC, ElementType, useEffect } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/reducers'
import { GET_USERINFO } from '@/store/types/user'

interface IProps extends Omit<RouteProps, 'component'> {
  component: ElementType;
}

const AuthRoute: FC<IProps> = ({
  component: Component,
  ...rest
}) => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: RootState) => state.user.isAuth)

  useEffect(() => {
    dispatch({
      type: GET_USERINFO
    })
  }, [])

  return (
    <Route
      {...rest}
      render={ props => isAuth ? <Component {...props} /> : <Redirect to="/login" />}
     />
  )
}

export default AuthRoute
