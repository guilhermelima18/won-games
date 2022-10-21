import React, { ReactNode } from 'react'
import { Wrapper } from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
}

export const Heading = ({ children, color = 'white' }: HeadingProps) => {
  return <Wrapper color={color}>{children}</Wrapper>
}
