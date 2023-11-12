import styled from "styled-components";
interface Props {
  background?: string;
  color?: string;
}

export const Container = styled.section<Props>`
  background-color: ${props => props.background};
  padding: 24px 0;
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
export const FlexRowSB = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`