import * as Styled from "./styled";
import { TbBell } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { headerUserName } from "../../../utils";

type Props = {
  name: string;
  avatar: string;
};
export const Header = ({ name, avatar }: Props) => {
  const theme = useTheme();
  const frLng = "fr";
  const nlLng = "nl";
  const [activeLng, setActiveLng] = useState(frLng);

  const handleLng = (lng: string) => {
    setActiveLng(lng);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogo>My Tipaw</Styled.HeaderLogo>
      <Styled.HeaderNavigationWrapper>
        <Styled.HeaderLocalizationWrap>
          <Styled.HeaderLocalizationLink
            to="#"
            style={{
              color: activeLng === frLng ? theme.color.blue.default : "",
            }}
            onClick={() => handleLng(frLng)}
          >
            Fr
          </Styled.HeaderLocalizationLink>
          <Styled.HeaderDot></Styled.HeaderDot>
          <Styled.HeaderLocalizationLink
            to="#"
            style={{
              color: activeLng === nlLng ? theme.color.blue.default : "",
            }}
            onClick={() => handleLng(nlLng)}
          >
            Nl
          </Styled.HeaderLocalizationLink>
        </Styled.HeaderLocalizationWrap>
        <Styled.HeaderNavigationMessage to="#">
          <TbBell />
        </Styled.HeaderNavigationMessage>
        <Styled.HeaderAccountWrapper>
          <Styled.HeaderAccountImg src={avatar} alt="some guy with a dog" />
          <Styled.HeaderAccountName>
            {headerUserName(name)}
          </Styled.HeaderAccountName>
          <IoIosArrowDown />
        </Styled.HeaderAccountWrapper>
      </Styled.HeaderNavigationWrapper>
    </Styled.HeaderContainer>
  );
};
