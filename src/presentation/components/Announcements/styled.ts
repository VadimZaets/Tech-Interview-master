
import styled from "@emotion/styled";

import Card from 'react-bootstrap/Card';
import { theme } from "../../../application/theme";

export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.light.default};
  border: ${theme.color.border};
  border-radius: 4px;
  padding: 40px;
`;
export const AnnouncementsTitleWrap = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-bottom: 32px;

   
`;
export const AnnouncementsTitle = styled.h3`
   font-size: 18px;
   font-weight: 600;
   margin-right: 16px;
   color: ${theme.color.blue.default};
   
`;
export const RedDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: red;
   
`;
 
export const AccordionItem = styled.div`
   width: 100%;
   background: ${theme.color.blue.default};
   padding: 12px 24px;
   border-radius: 4px;
  
`;
export const AccordionHeaderContainer = styled(Card.Header)`
  
  background-color: ${theme.color.blue.default}; 
  
`;
export const AccordionHeader = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background-color: transparent;

   & > svg {
    width: 24px;
    height: 24px;
    color:${theme.color.light.default};
    transition: all 0.4s;
  }

`;

export const AccordionHeaderTitle = styled.h3`
    font-size: 16px;
    font-weight:700;
    line-height: 24px;
    color: ${theme.color.light.default} ;
`;


export const AccordionCollapse = styled(Card)`
border: ${theme.color.accentBorder}; 
overflow: hidden;
`;

export const AccordionText = styled.p`
font-size: 16px;
font-weight: 400;
color: ${theme.color.medium.shade}; 
`;