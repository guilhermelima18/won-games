import { Meta, Story } from "@storybook/react";
import { GameCardSlider, GameCardSliderProps } from ".";

const items = [
  {
    title: 'Population zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 250,00'
  }
]

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