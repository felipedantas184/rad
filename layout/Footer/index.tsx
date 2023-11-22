import { Container, FlexRowSB } from '@/components/Elements/containers';
import { IWrap, Item, LogoWrapper, Nav } from "./styles";
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container background='#000000' style={{ padding: 16 }} >
      <FlexRowSB style={{ maxWidth: 1080, marginLeft: 'auto', marginRight: 'auto' }} >
        <LogoWrapper>
          <Image src={'/images/logo.png'} alt={'RAD Consultoria Aeronáutica'} fill className={'image'} />
        </LogoWrapper>
        <Nav>
          <IWrap><Item to='aerodromos' smooth={true} duration={500} spy={true}>Aeródromos</Item></IWrap>
          <IWrap><Item to='helipontos' smooth={true} duration={500} spy={true}>Helipontos</Item></IWrap>
          <IWrap><Item to='transferencias' smooth={true} duration={500} spy={true}>Transferências</Item></IWrap>
        </Nav>
        <Nav>
          <a target='_blank' href='/' arial-label='Instagram'><FaInstagram size={24} color={'#F6F6F6'} /></a>
          <a target='_blank' href='/' arial-label='Facebook'><FaFacebook size={24} color={'#F6F6F6'} /></a>
          <a target='_blank' href='mailto:ricardo@tecdata.com.br' arial-label='Email'><FaEnvelope size={24} color={'#F6F6F6'} /></a>
        </Nav>
      </FlexRowSB>
    </Container>
  )
}

export default Footer;