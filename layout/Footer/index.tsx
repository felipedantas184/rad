import { Container, FlexRowSB } from '@/components/Elements/containers';
import { Item, LogoWrapper, Menu } from "./styles";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container background='#000000' style={{padding: 16}} >
      <FlexRowSB style={{maxWidth: 1080, marginLeft: 'auto', marginRight: 'auto'}} >
        <LogoWrapper>
          <Image src={'/images/logo.png'} alt={'RAD Consultoria Aeronáutica'} fill className={'image'} />
        </LogoWrapper>
        <Menu>
          <Item href={'/'}>Aeródromos</Item>
          <Item href={'/'}>Helipontos</Item>
          <Item href={'/'}>Transferências</Item>
        </Menu>
        <Menu>
          <a target='_blank' href='/' ><FaInstagram size={24} color={'#F6F6F6'}/></a>
          <a target='_blank' href='/' ><FaFacebook size={24} color={'#F6F6F6'}/></a>
          <a target='_blank' href='/' ><FaMailBulk size={24} color={'#F6F6F6'}/></a>
        </Menu>
      </FlexRowSB>
    </Container>
  )
}

export default Footer;