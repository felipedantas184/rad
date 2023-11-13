import { FaAirbnb, FaBars, FaShoppingBag } from 'react-icons/fa'
import { NavContainer, ItemLink, NavWrapper, Nav, NavItem } from "./styles"

const Navbar = () => {
  return (
    <NavContainer background="#023E8A" >
      <NavWrapper>
        <ItemLink href={'/'}><FaAirbnb size={32} color="#FFF" /></ItemLink> 
         <Nav>
          <NavItem href={'/'} >Home</NavItem>
          <NavItem href={'/'} >Contact</NavItem>
          <NavItem href={'/'} >Login</NavItem>
        </Nav>
        {/**
          <FaBars size={24} color="#E1E1E1" /> 
         */}
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar;