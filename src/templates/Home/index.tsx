import { BannerProps } from 'components/Banner'
import { BannerSlider } from 'components/BannerSlider'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import { GameCardSlider } from 'components/GameCardSlider'
import { Heading } from 'components/Heading'
import { Highlight, HighlightProps } from 'components/Highlight'
import { Menu } from 'components/Menu'
import {
  SectionBanner,
  SectionFreeGames,
  SectionMostPopular,
  SectionNews,
  SectionUpcoming
} from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

export const HomeTemplate = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <SectionBanner>
          <BannerSlider items={banners} />
        </SectionBanner>
      </Container>

      <Container>
        <SectionNews>
          <Container>
            <Heading lineLeft lineColor="secondary" color="black">
              News
            </Heading>

            <GameCardSlider items={newGames} color="black" />
          </Container>
        </SectionNews>
      </Container>

      <Container>
        <SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </SectionMostPopular>
      </Container>

      <Container>
        <SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcoming
          </Heading>

          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighlight} />
          <GameCardSlider items={upcommingMoreGames} />
        </SectionUpcoming>
      </Container>

      <Container>
        <SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </SectionFreeGames>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}
