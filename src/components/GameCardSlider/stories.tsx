import { Meta, Story } from "@storybook/react";
import { GameCardSlider, GameCardSliderProps } from ".";

import items from './mock'

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  args: { items }
} as Meta

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)