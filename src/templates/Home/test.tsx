import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { HomeTemplate } from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<HomeTemplate />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<HomeTemplate />)

    expect(screen.getByRole('heading', { name: 'News' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Upcoming' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Free Games' })
    ).toBeInTheDocument()
  })
})
