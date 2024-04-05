import React, { FC } from "react";
import * as Styled from "./styled";
import { useAccordionButton } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { AnnouncementData } from "../../pages";
import { IoIosArrowDown } from "react-icons/io";
import { TbCalendarEvent } from "react-icons/tb";

type CustomToggleProps = {
  children: string;
  eventKey: string;
};
function CustomToggle({ children, eventKey }: CustomToggleProps) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Styled.AccordionHeader onClick={decoratedOnClick}>
      <Styled.AccordionHeaderTitle>{children}</Styled.AccordionHeaderTitle>
      <IoIosArrowDown />
    </Styled.AccordionHeader>
  );
}

export const Announcements: FC<{ announcements: AnnouncementData[] }> = ({
  announcements,
}) => {
  

  return (
    <Styled.AnnouncementsContainer>
      <Styled.AnnouncementsTitleWrap>
        <Styled.AnnouncementsTitle>
          Announcements from TIPAW <span></span>
        </Styled.AnnouncementsTitle>
        <Styled.RedDot></Styled.RedDot>
      </Styled.AnnouncementsTitleWrap>
      <Accordion defaultActiveKey="0">
        {announcements.map((announcement, index) => (
          <Styled.AccordionCollapse>
            <Styled.AccordionHeaderContainer>
              <CustomToggle eventKey={index.toString()}>
                {announcement.title}
              </CustomToggle>
            </Styled.AccordionHeaderContainer>
            <Accordion.Collapse eventKey={index.toString()}>
              <Styled.AccordionTextContainer>
             
                <Styled.AccordionDate> <TbCalendarEvent /> {announcement.date}</Styled.AccordionDate>
                <Styled.AccordionText>
                  {announcement.content}
                </Styled.AccordionText>
              </Styled.AccordionTextContainer>
            </Accordion.Collapse>
          </Styled.AccordionCollapse>
        ))}
      </Accordion>
    </Styled.AnnouncementsContainer>
  );
};
