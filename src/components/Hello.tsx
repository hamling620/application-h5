import React, { FC } from 'react'

interface IProps {
  message?: string;
}

const Hello: FC<IProps> = (props) => {
  return (
    <div>{ props.message }</div>
  )
}

Hello.defaultProps = {
  message: 'hello world'
}

export default Hello
