import styled from "styled-components";

export const Container = styled.section`
  background-color: #FFF;
  background: linear-gradient(0deg, rgba(247, 245, 245, 0.1) 0%, rgba(233, 225, 225, 0.25) 100%), url('/images/ceu.jpg'), lightgray 50% / cover no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    background-attachment: scroll;
  }

  .heroWrapper {
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`