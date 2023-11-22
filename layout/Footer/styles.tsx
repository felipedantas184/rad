import { Link } from "react-scroll";
import styled from "styled-components";

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
  gap: 16px;
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