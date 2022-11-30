import { Meta, Story } from '@storybook/react'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    price: 'R$ 235,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)
