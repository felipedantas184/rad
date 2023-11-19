import styled from "styled-components";

export const BoxWrapper = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: -100px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;    
  }
`
export const Box = styled.div`
  flex: 1;
  min-width: 275px;
  max-width: 340px;
  background-color: #F6F6F6;
  padding: 16px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
export const BoxTitle = styled.h4`
  color: #13131A;
  font-size: 20px;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const BoxParagraph = styled.p`
   color: #33333A;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`