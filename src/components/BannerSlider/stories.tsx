import { Meta, Story } from '@storybook/react'
import { BannerSlider, BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'BannerSlide',
  component: BannerSlider,
  args: { items },
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
