import { Slide } from "react-awesome-reveal"
import styled from "styled-components"

export const TestimonialsWrapper = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`
export const SlideComp = styled(Slide)`
  @media screen and (max-width: 768px) {
    width: 100%;
  } 
`
export const Testimonial = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  background-color: #F6F6F6;
  padding: 16px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px, rgba(0, 0, 0, 0.23) 0px 1px 2px;
  transition: transform 0.5s ease-in-out;
  cursor: default;

  &:hover {
    transform: scale(1.025);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`
export const TTitle = styled.h4`
  color: #13131A;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const TSubtitle = styled.h5`
  color: #33333A;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const TLocation = styled.span`
  color: #33333A;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  align-self: flex-end;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`