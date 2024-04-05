import styled from "@emotion/styled";
import Card from "react-bootstrap/Card";
import { theme } from "../../../application/theme";

export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.light.default};
  border: ${theme.color.border};
  border-radius: 4px;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 40px 38px 42px 38px;
  }
`;
export const AnnouncementsTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;
export const AnnouncementsTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-right: 16px;
  @media (min-width: 375px) {
    font-size: 18px;
  }
  color: ${theme.color.blue.default};
`;
export const RedDot = styled.div`
  width: 5px;
  height: 5px;
  @media (min-width: 375px) {
    width: 10px;
    height: 10px;
  }
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
  padding: 12px 24px;
  cursor: pointer;
`;
export const AccordionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  & > svg {
    width: 20px;
    height: 20px;

    @media (min-width: 375px) {
      width: 24px;
      height: 24px;
    }
    color: ${theme.color.light.default};
    transition: all 0.4s;
  }
`;
export const AccordionHeaderTitle = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  @media (min-width: 375px) {
    font-size: 16px;
  }
  color: ${theme.color.light.default};
`;
export const AccordionCollapse = styled(Card)`
  border: ${theme.color.accentBorder};
  overflow: hidden;
`;
export const AccordionDate = styled.p`
  display: flex;
  align-items: center;
  font-size: 7px;
  font-weight: 400;
  line-height: 16px;
  color: ${theme.color.blue.default};
  margin-bottom: 16px;

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
export const AccordionTextContainer = styled(Card.Body)`
  padding: 16px 24px;
`;
export const AccordionText = styled.p`
  font-size: 12px;
  font-weight: 400;
  @media (min-width: 375px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  color: ${theme.color.medium.shade};
`;
