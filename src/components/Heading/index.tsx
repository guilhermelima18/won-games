import React, { ReactNode } from 'react'
import { Wrapper } from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </Wrapper>
  )
}
