import Image from "next/image"
import { Container, FlexColumnCenter, Wrapper } from "../Elements/containers"
import { Paragraph, Title } from "../Elements/text"
import { ELink } from "../Elements/buttons"
import { PicWrapper } from "./styles"
import { Slide } from "react-awesome-reveal"


const Interest = () => {
  return (
    <Container background="#000000">
      <Wrapper style={{ gap: 16 }}>
        <Title style={{ color: '#FFFFFF', textAlign: 'center'}}>Ficou Interessado nos <br/>Nossos Serviços?</Title>
        <ELink href="mailto:ricardo@tecdata.com.br?subject=Solicitação de Orçamento - Serviços Aeronáuticos RAD" target="_blank" blue >Solicite um Orçamento</ELink>
        <FlexColumnCenter style={{alignItems: 'center'}} >
          <PicWrapper>
            <Image src={'/images/ricardo.png'} alt={'RAD Consultoria Aeronáutica'} fill className={'image'} />
          </PicWrapper>
          <Slide direction="up" triggerOnce>
            <Title style={{ color: '#F1F1F1', fontSize: 24}}>Ricardo Dantas</Title>
            <Paragraph style={{ color: '#6D6D6D'}}>Breve resumo aqui</Paragraph>
          </Slide>
        </FlexColumnCenter>
      </Wrapper>
    </Container>
  )
}

export default Interest