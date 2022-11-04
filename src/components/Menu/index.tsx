import { useState } from 'react'
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill'
import { ShoppingCart, Search, Close } from 'styled-icons/material-outlined'
import Logo from 'components/Logo'

import {
  Wrapper,
  IconWrapper,
  MenuGroup,
  LogoWrapper,
  MenuFull,
  MenuLink,
  MenuNav,
  RegisterBox,
  CreateAccount
} from './styles'
import { Button } from 'components/Button'
import { MediaMatch } from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper>
          <MenuIcon
            aria-label="Open Menu"
            onClick={() => setMenuIsOpen(true)}
          />
        </IconWrapper>
      </MediaMatch>
      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <Search aria-label="Search" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCart aria-label="Open Shopping Cart" />
        </IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </MenuGroup>

      <MenuFull menuIsOpen={menuIsOpen} aria-hidden={!menuIsOpen}>
        <Close aria-label="Close Menu" onClick={() => setMenuIsOpen(false)} />
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>

          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <CreateAccount href="#" title="Sign Up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  )
}
