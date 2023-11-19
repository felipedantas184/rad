import styled from "styled-components";
import Link from "next/link";
interface Props {
  background?: string;
  color?: string;
}

export const NavContainer = styled.section<Props>`
  background-color: ${props => props.background};
  height: 60px;
`
export const NavWrapper = styled.div`
	max-width: 1080px;
  height: 60px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const LogoWrapper = styled.div`
  position: relative;
	width: 105px;
	height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
export const ItemLink = styled(Link)`
  display: flex;
	align-items: center;
	justify-content: center;
`
export const Nav = styled.nav`
  height: 60px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`
export const NavItem = styled(Link)`
  color: #E1E1E1;
  font-size: 16px;
  font-weight: 500;
`
export const Badge = styled.div`
	color: #F1F2F3;
	font-size: 12px;
	font-weight: 600;
	background-color: #13131A;

	align-self: flex-start;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 20px;
	height: 20px;
	border-radius: 50%;
`