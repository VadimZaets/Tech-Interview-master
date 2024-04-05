import React, { FC } from "react";
import * as Styled from "./styled";
import { useAccordionButton } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { AnnouncementData } from "../../pages";
import { IoIosArrowDown } from "react-icons/io";

type CustomToggleProps = {
  children: string;
  eventKey: string;
};

export const Announcements: FC<{ announcements: AnnouncementData[] }> = ({
  announcements,
}) => {
  function CustomToggle({ children, eventKey }: CustomToggleProps) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Styled.AccordionHeader onClick={decoratedOnClick}>
        <Styled.AccordionHeaderTitle>{children}</Styled.AccordionHeaderTitle>
        <IoIosArrowDown />
      </Styled.AccordionHeader>
    );
  }

  return (
    <Styled.AnnouncementsContainer>
      <Styled.AnnouncementsTitleWrap>
      <Styled.AnnouncementsTitle>
        Announcements from TIPAW <span></span>
      </Styled.AnnouncementsTitle>
       <Styled.RedDot></Styled.RedDot>
      </Styled.AnnouncementsTitleWrap>
      <Accordion  defaultActiveKey="0">
        {announcements.map((announcement, index) => (
          <Styled.AccordionCollapse>
            <Styled.AccordionHeaderContainer>
              <CustomToggle eventKey={index.toString()}>
                {announcement.title}
              </CustomToggle>
            </Styled.AccordionHeaderContainer>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                <Styled.AccordionText>
                {announcement.content}
                </Styled.AccordionText>
                </Card.Body>
            </Accordion.Collapse>
          </Styled.AccordionCollapse>
        ))}
      </Accordion>
    </Styled.AnnouncementsContainer>
  );
};
