import styled from "styled-components"

export const LogoWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: 8px;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`