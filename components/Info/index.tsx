import Image from "next/image"
import { ButtonWrapper, Container, FlexColumnCenter, FlexRowSB, ImageWrapper, Wrapper } from "../Elements/containers"
import { Paragraph, Title } from "../Elements/text"
import { Button, ELink } from "../Elements/buttons"
import { Slide } from "react-awesome-reveal"

interface InfoProps {
  background?: string,
  id?: string,
  color?: string,
  title?: string,
  paragraph?: string,
  imageUrl: string,
  alt: string,
  invert?: boolean
}

const Info = ({background, id, color, title, paragraph, imageUrl, alt, invert}:InfoProps) => {
  return (
    <Container background={background} id={id} >
      <Wrapper>
        <FlexRowSB invert={invert}>
          <FlexColumnCenter style={{ flex: 1}} >
            <Slide triggerOnce>
              <Title style={{color: color}}>{title}</Title>
              <Paragraph style={{color: color}}>{paragraph}</Paragraph>
              <ButtonWrapper>
                <ELink blue href="mailto:ricardo@tecdata.com.br?subject=Serviços Aeronáuticos com a RAD" target="_blank" >Entre em Contato</ELink>
                <ELink href='https://api.whatsapp.com/send?phone=5586999811672&text=Ol%C3%A1!%20Conheci%20a%20RAD%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.' target='_blank' >Saiba Mais</ELink>
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