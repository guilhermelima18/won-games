import { Button } from 'components/Button'
import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon'
import { Caption, Image, Subtitle, Title, Wrapper } from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize
}: BannerProps) => {
  return (
    <Wrapper>
      <Image src={img} role="img" aria-label={title} />
      <Caption>
        <Title>{title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </Caption>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
    </Wrapper>
  )
}
