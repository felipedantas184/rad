import { NavContainer, NavWrapper, Nav, LogoWrapper, IWrap, Item } from "./styles"
import { Button, ELink } from '@/components/Elements/buttons';
import Image from 'next/image';
import { FaRoad } from "react-icons/fa";
import { FaHelicopterSymbol } from "react-icons/fa6";
import { MdOutlineConnectingAirports } from "react-icons/md";

const Navbar = () => {
  return (
    <NavContainer background="#023E8A" >
      <NavWrapper>
        <LogoWrapper>
          <Image src={'/images/logo.png'} alt={'RAD Consultoria Aeronáutica'} fill className={'image'} />
        </LogoWrapper>
        <Nav>
          <IWrap><Item to='aerodromos' smooth={true} duration={500} spy={true}><FaRoad color="#E1E1E1" /><>Aeródromos</></Item></IWrap>
          <IWrap><Item to='helipontos' smooth={true} duration={750} spy={true}><FaHelicopterSymbol color="#E1E1E1" /><>Helipontos</></Item></IWrap>
          <IWrap><Item to='transferencias' smooth={true} duration={1000} spy={true}><MdOutlineConnectingAirports color="#E1E1E1" /><>Transferências</></Item></IWrap>
        </Nav>
        <ELink href="mailto:ricardo@tecdata.com.br?subject=Solicitação de Orçamento - Serviços Aeronáuticos RAD" target="_blank" style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 8, paddingTop: 8 }}>Contato</ELink>
        {/**
          <FaBars size={24} color="#E1E1E1" /> 
         */}
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar;