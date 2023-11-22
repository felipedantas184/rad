import { Link } from "react-scroll";
import styled from "styled-components";
interface ButtonProps {
  blue?: boolean,
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-clip: padding-box;
  background-color: ${props => (props.blue ? '#02328A' : '#FFFFFF')};
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  box-sizing: border-box;
  color: ${props => (props.blue ? '#FFFFFF' : '#02328A')};;
  cursor: pointer;
  display: inline-flex;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 12px 12px;
  position: relative;
  text-decoration: none;
  transition: all 500ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover, &:focus {
    background-color: #13131A;
    color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:active {
    background-color: #13113A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const WppButton = styled.a`
  position: fixed;
  right: 16px;
  bottom: 16px;

  background-color: #1cac51;
  color: #F6F6F6;
  border-radius: 16px;
  padding: 12px;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 12px;

  text-decoration: none;
  transition: all 500ms;
  user-select: none;
  -webkit-user-select: none;

  &:hover, &:focus {
    background-color: #13131A;
    color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:active {
    background-color: #13113A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`
export const ScrollButton = styled(Link)<ButtonProps>`
  align-items: center;
  background-clip: padding-box;
  background-color: ${props => (props.blue ? '#02328A' : '#FFFFFF')};
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  box-sizing: border-box;
  color: ${props => (props.blue ? '#FFFFFF' : '#02328A')};;
  cursor: pointer;
  display: inline-flex;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 12px 12px;
  position: relative;
  text-decoration: none;
  transition: all 500ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover, &:focus {
    background-color: #13131A;
    color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:active {
    background-color: #13113A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ELink = styled.a<ButtonProps>`
  align-items: center;
  background-clip: padding-box;
  background-color: ${props => (props.blue ? '#02328A' : '#FFFFFF')};
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  box-sizing: border-box;
  color: ${props => (props.blue ? '#FFFFFF' : '#02328A')};;
  cursor: pointer;
  display: inline-flex;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 12px 12px;
  position: relative;
  text-decoration: none;
  transition: all 500ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover, &:focus {
    background-color: #13131A;
    color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:active {
    background-color: #13113A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`