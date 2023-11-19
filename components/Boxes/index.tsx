import { Container, Wrapper } from "../Elements/containers"
import { Box, BoxParagraph, BoxTitle, BoxWrapper } from "./styles"
import { Button } from "../Elements/buttons"
import { MdOutlineConnectingAirports } from "react-icons/md";
import { FaHelicopterSymbol } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const Boxes = () => {
  return (
    <Container background="#023E8A" >
      <Wrapper>
        <Slide direction="up" triggerOnce>
          <BoxWrapper>
            <Box>
              <BoxTitle><FaRoad size={30} color='#22222A' />Registro de Aeródromos</BoxTitle>
              <BoxParagraph>Trabalhamos em estreita colaboração com você, fornecendo orientação especializada e suporte personalizado, desde a preparação da documentação até a coordenação com as autoridades competentes.</BoxParagraph>
              <Button theme={'blue'} style={{ alignSelf: 'flex-end', marginTop: 8 }}>Conhecer Mais</Button>
            </Box>
            <Box>
              <BoxTitle><FaHelicopterSymbol size={30} color='#22222A' />Registro de Helipontos</BoxTitle>
              <BoxParagraph>Somos a escolha certa quando se trata da homologação de helipontos. Com um profundo entendimento dos requisitos específicos, estamos preparados para guiá-lo em todo o processo de homologação</BoxParagraph>
              <Button theme={'blue'} style={{ alignSelf: 'flex-end', marginTop: 8 }}>Conhecer Mais</Button>
            </Box>
            <Box>
              <BoxTitle><MdOutlineConnectingAirports size={30} color='#22222A' />Transferências</BoxTitle>
              <BoxParagraph>A transferência de propriedade de aeronaves pode ser um processo complexo, mas a RAD Consultoria Aeronáutica simplifica essa transição para você. Vamos orientá-lo em cada etapa do processo de transferência.</BoxParagraph>
              <Button theme={'blue'} style={{ alignSelf: 'flex-end', marginTop: 8 }}>Conhecer Mais</Button>
            </Box>
          </BoxWrapper>
        </Slide>
      </Wrapper>
    </Container>
  )
}

export default Boxes