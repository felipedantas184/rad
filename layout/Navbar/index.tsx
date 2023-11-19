import { NavContainer, NavWrapper, Nav, NavItem, LogoWrapper } from "./styles"
import { Button } from '@/components/Elements/buttons';
import Image from 'next/image';

const Navbar = () => {
  return (
    <NavContainer background="#023E8A" >
      <NavWrapper>
        <LogoWrapper>
          <Image src={'/images/logo.png'} alt={'RAD Consultoria Aeronáutica'} fill className={'image'} />
        </LogoWrapper>
        <Nav>
          <NavItem href={'/'} >Aeródromos</NavItem>
          <NavItem href={'/'} >Helipontos</NavItem>
          <NavItem href={'/'} >Transferências</NavItem>
        </Nav>
        <Button style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 8, paddingTop: 8 }}>Contato</Button>
        {/**
          <FaBars size={24} color="#E1E1E1" /> 
         */}
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar;