import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { HomeTemplate } from '.'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<HomeTemplate {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<HomeTemplate {...props} />)

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

  it("should render section elements", () => {
    renderWithTheme(<HomeTemplate {...props} />)

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
