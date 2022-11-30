import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameCard } from '.'

const props = {
  title: 'Population zero',
  developer: 'Rockstar Games',
  img: 'https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render headings', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()
  })
})
