import { Button } from 'components/Button'
import { Wrapper, Title, Subtitle } from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HighlightProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Wrapper>
  )
}
