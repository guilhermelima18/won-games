import { Button } from 'components/Button'
import { Wrapper, Title, Subtitle, Content, FloatImage } from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

export const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  backgroundImage,
  buttonLink,
  floatImage,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <FloatImage src={floatImage} alt={title} />}
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Content>
    </Wrapper>
  )
}
