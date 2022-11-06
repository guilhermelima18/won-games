import Link from 'next/link'
import { Heading } from 'components/Heading'
import Logo from 'components/Logo'

import { Column, Wrapper, Content, Copyright } from './styles'

export const Footer = () => {
  return (
    <Wrapper>
      <Logo color="black" />
      <Content>
        <Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </Column>

        <Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>
          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </Column>

        <Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/search">
              <a>Buscar</a>
            </Link>
          </nav>
        </Column>

        <Column aria-labelledby="footer-contact">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>
          <span>Lorem Ipsum</span>
          <span>Lorem Ipsum</span>
          <span>Lorem Ipsum</span>
        </Column>
      </Content>
      <Copyright>Won Games 2020 &copy; All rights reserved.</Copyright>
    </Wrapper>
  )
}
