import styled from "styled-components";
import { Link } from 'react-scroll'

interface Props {
  background?: string;
  color?: string;
}

export const NavContainer = styled.nav<Props>`
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
export const Nav = styled.ul`
  height: 60px;
	list-style: none;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`
export const IWrap = styled.li`
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #E1E1E1;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
export const Item = styled(Link)`
  height: 60px;
  padding: 0 1rem;
  font-size: 16px;
	font-weight: 500;
	color: #E1E1E1;

  display: flex;
  flex-direction: row;
  align-items: center;	
  gap: 8px;
  
  cursor: pointer;
	transition: all 0.2s ease-in-out;
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