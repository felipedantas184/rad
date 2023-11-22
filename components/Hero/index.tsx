import Image from "next/image"
import { ButtonWrapper, FlexColumnCenter, FlexRowSB, ImageWrapper, Wrapper } from "../Elements/containers"
import { Herosubtitle, Herotitle } from "../Elements/text"
import { Button, ScrollButton } from "../Elements/buttons"
import { Container } from "./styles"


const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <FlexRowSB className="heroWrapper" >
          <FlexColumnCenter style={{ flex: 1}} >
            <Herotitle>Qualidade e Excelência em Serviços Aeronáuticos</Herotitle>
            <Herosubtitle>Nossa equipe altamente especializada e nossa vasta experiência são os pilares que sustentam nossa busca incansável pela excelência</Herosubtitle>
            <ButtonWrapper>
              <Button blue >Entre em Contato</Button>
              <ScrollButton to='aerodromos' smooth={true} duration={500} spy={true}>Conhecer Serviços</ScrollButton>
            </ButtonWrapper>
          </FlexColumnCenter>
          <FlexColumnCenter style={{ flex: 1}} >
            <ImageWrapper>
              <Image src={'/images/cirrus.png'} alt={'ultraleve'} fill className={'image'} />
            </ImageWrapper>
          </FlexColumnCenter>
        </FlexRowSB>
      </Wrapper>
    </Container>
  )
}

export default Hero