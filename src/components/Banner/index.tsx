import { Button } from 'components/Button'
import { Caption, Image, Subtitle, Title, Wrapper } from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
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
    </Wrapper>
  )
}
