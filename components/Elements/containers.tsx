import styled from "styled-components";
interface Props {
  background?: string;
  color?: string;
}
interface FlexProps {
  invert?: boolean;
}

export const Container = styled.section<Props>`
  background-color: ${props => props.background};
  padding: 50px 0;
`
export const Wrapper = styled.div`
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
export const FlexRowSB = styled.div<FlexProps>`
  width: 100%;

  display: flex;
  flex-direction: ${props => (props.invert ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`
export const FlexColumnCenter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`