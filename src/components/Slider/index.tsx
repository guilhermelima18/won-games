import { ReactNode } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import { Wrapper } from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Wrapper>
  )
}
