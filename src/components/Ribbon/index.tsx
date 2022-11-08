import { ReactNode } from 'react'
import { Wrapper } from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <Wrapper color={color} size={size}>
      {children}
    </Wrapper>
  )
}
