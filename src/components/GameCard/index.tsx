/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'
import { Button } from 'components/Button'
import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon'
import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite
} from 'styled-icons/material-outlined'
import {
  Wrapper,
  ImageBox,
  Info,
  Title,
  Developer,
  FavButton,
  BuyBox,
  Price,
  Content
} from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
  onFav?: () => void
}

export const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor,
  ribbonSize,
  onFav
}: GameCardProps) => {
  return (
    <Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>

      <Content>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>
        </Info>

        <FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </FavButton>

        <BuyBox>
          {!!promotionalPrice && <Price isPromotional>{price}</Price>}
          <Price>{promotionalPrice || price}</Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </BuyBox>
      </Content>
    </Wrapper>
  )
}
