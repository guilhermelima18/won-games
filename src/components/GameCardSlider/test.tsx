import { screen } from '@testing-library/react';
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers';
import { GameCardSlider } from '.';

const props = [
  {
    title: 'Population zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
];

describe("<GameCardSlider />", () => {
  it("should render with 4 active items", () => {
    const { container } = renderWithTheme(<GameCardSlider items={props} />)

    expect(container.querySelectorAll(".slick-active")).toHaveLength(2);
  })

  it("should render white arrows if color passed", () => {
    renderWithTheme(<GameCardSlider items={props} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: "#FAFAFA"
    })
  })
})