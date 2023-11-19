import Image from "next/image"
import { ButtonWrapper, Container, FlexColumnCenter, FlexRowSB, ImageWrapper, Wrapper } from "../Elements/containers"
import { Paragraph, Title } from "../Elements/text"
import { Button } from "../Elements/buttons"
import { Slide } from "react-awesome-reveal"

interface InfoProps {
  background?: string,
  color?: string,
  title?: string,
  paragraph?: string,
  imageUrl: string,
  alt: string,
  invert?: boolean
}

const Info = ({background, color, title, paragraph, imageUrl, alt, invert}:InfoProps) => {
  return (
    <Container background={background} >
      <Wrapper>
        <FlexRowSB invert={invert}>
          <FlexColumnCenter style={{ flex: 1}} >
            <Slide triggerOnce>
              <Title style={{color: color}}>{title}</Title>
              <Paragraph style={{color: color}}>{paragraph}</Paragraph>
              <ButtonWrapper>
                <Button theme='blue'>Entre em Contato</Button>
                <Button>Saiba Mais</Button>
              </ButtonWrapper>
            </Slide>
          </FlexColumnCenter>
          <FlexColumnCenter style={{ flex: 1}} >
            <ImageWrapper>
              <Image src={imageUrl} alt={alt} fill className={'image'} />
            </ImageWrapper>
          </FlexColumnCenter>
        </FlexRowSB>
      </Wrapper>
    </Container>
  )
}

export default Info