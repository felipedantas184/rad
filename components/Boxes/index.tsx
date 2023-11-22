import { Container, Wrapper } from "../Elements/containers"
import { Box, BoxParagraph, BoxTitle, BoxWrapper } from "./styles"
import { Button, ScrollButton } from "../Elements/buttons"
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
              <BoxParagraph>fornecemos orientação especializada e suporte personalizado, desde a preparação da documentação até a coordenação com as autoridades.</BoxParagraph>
              <ScrollButton style={{background: '#02328A', color: '#FFFFFF', alignSelf: 'flex-end', marginTop: 8}} to='aerodromos' smooth={true} duration={500} spy={true}>Conhecer Mais</ScrollButton>
            </Box>
            <Box>
              <BoxTitle><FaHelicopterSymbol size={30} color='#22222A' />Registro de Helipontos</BoxTitle>
              <BoxParagraph>Somos a escolha certa quando se trata da homologação de helipontos. Estamos preparados para guiá-lo em todo o processo de homologação</BoxParagraph>
              <ScrollButton style={{background: '#02328A', color: '#FFFFFF', alignSelf: 'flex-end', marginTop: 8}} to='helipontos' smooth={true} duration={750} spy={true}>Conhecer Mais</ScrollButton>
            </Box>
            <Box>
              <BoxTitle><MdOutlineConnectingAirports size={30} color='#22222A' />Transferências</BoxTitle>
              <BoxParagraph>A transferência de propriedade de aeronaves pode ser um processo complexo, mas a RAD Consultoria simplifica essa transição para você.</BoxParagraph>
              <ScrollButton style={{background: '#02328A', color: '#FFFFFF', alignSelf: 'flex-end', marginTop: 8}} to='transferencias' smooth={true} duration={1000} spy={true}>Conhecer Mais</ScrollButton>
            </Box>
          </BoxWrapper>
        </Slide>
      </Wrapper>
    </Container>
  )
}

export default Boxes