import { styled } from 'linaria/react'
import React from 'react'
import { reset } from '../../styles/global'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <LWrap className={reset}>
        {props.children}
      </LWrap>
    </>
  )
}

const LWrap = styled.div``
