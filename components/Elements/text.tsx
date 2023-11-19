import styled from "styled-components";

interface Props {
  size?: string;
}


export const Herotitle = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const Herosubtitle = styled.h3`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const Paragraph = styled.p`
  color: #44444A;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`