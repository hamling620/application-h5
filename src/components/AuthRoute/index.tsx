import React, { FC, ElementType } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/reducers'

interface IProps extends Omit<RouteProps, 'component'> {
  component: ElementType;
}

const AuthRoute: FC<IProps> = ({
  component: Component,
  ...rest
}) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth)
  console.log(isAuth)

  return (
    <Route
      {...rest}
      render={ props => isAuth ? <Component {...props} /> : <Redirect to="/login" />}
     />
  )
}

export default AuthRoute
