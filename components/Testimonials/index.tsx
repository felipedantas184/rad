import { FaRoad } from "react-icons/fa"
import { Container, Wrapper } from "../Elements/containers"
import { SlideComp, TLocation, TSubtitle, TTitle, Testimonial, TestimonialsWrapper } from "./styles"
import TestimonialsData from "./data"
import { Title } from "../Elements/text"

const Testimonials = () => {
  return (
    <Container background="#023E8A" style={{ padding: 16 }} >
      <Wrapper>
        <Title style={{alignSelf: 'flex-start', textAlign: 'left', paddingLeft: 8, color: '#F6F6F6'}}>Alguns dos Nossos Trabalhos</Title>
        <TestimonialsWrapper>
          <SlideComp triggerOnce direction="up" >
          {TestimonialsData.map((testimonial) => (
            <Testimonial key={testimonial.id} >
              <TTitle>{testimonial.title}</TTitle>
              <TSubtitle>{testimonial.icon}{testimonial.type}</TSubtitle>
              <TLocation>{testimonial.location}</TLocation>
            </Testimonial>
          ))}
          </SlideComp>
        </TestimonialsWrapper>
      </Wrapper>
    </Container>
  )
}

export default Testimonials