import Image from "next/image"
import { Container, Wrapper } from "../Elements/containers"
import { LogoWrapper } from "./styles"


const LogoSection = () => {
  return (
    <Container background="#FFFFFF" style={{paddingTop: 0, paddingBottom: 0}} >
      <Wrapper>
        <LogoWrapper>
          <Image src={'/images/logorad-black.png'} alt={'ultraleve'} fill className={'image'} />
        </LogoWrapper>
      </Wrapper>
    </Container>
  )
}

export default LogoSection