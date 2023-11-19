import styled from "styled-components";

export const PerksContainer = styled.section`
  background-color: #FFFFFF;
  padding: 0 0 25px 0;
  margin-top: -25px;
  
  @media screen and (max-width: 768px) {
    margin-top: 0px;    
  }
`
export const PerkWrapper = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;    
  }
`
export const Perk = styled.div`
  flex: 1;
  min-width: 275px;
  max-width: 340px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px, rgba(0, 0, 0, 0.23) 0px 1px 2px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`
export const PerkHero = styled.h5`
  color: #13131A;
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`
export const PerkTitle = styled.h4`
  color: #13131A;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const PerkParagraph = styled.p`
   color: #33333A;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const PerksSB = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;
  gap: 24px;
`