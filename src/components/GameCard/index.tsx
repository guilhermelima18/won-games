import { Button } from 'components/Button'
import Image from 'next/image'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
import {
  Wrapper,
  ImageBox,
  Info,
  Title,
  Developer,
  FavButton,
  BuyBox,
  Price
} from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

export const GameCard = ({ title, developer, img, price }: GameCardProps) => {
  return (
    <Wrapper>
      <ImageBox>
        <Image width={100} height={100} src={img} alt={title} />
      </ImageBox>

      <Info>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </Info>

      <FavButton role="button">
        <FavoriteBorder aria-label="Add to Wishlist" />
      </FavButton>

      <BuyBox>
        <Price>{price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Wrapper>
  )
}
