import * as Styled from "./styled";
import { TbBell } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useTheme } from "@emotion/react";

type Props = {
  name: string;
  avatar: string;
};
export const Header = ({ name, avatar }: Props) => {
  const theme = useTheme();
  const [activeLng, setActiveLng] = useState("fr");
  const displayName = name.length > 10 ? `${name.slice(0, 9)}...` : name;
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
              color: activeLng === "fr" ? theme.color.blue.default : "",
            }}
            onClick={() => handleLng("fr")}
          >
            Fr
          </Styled.HeaderLocalizationLink>
          <Styled.HeaderDot></Styled.HeaderDot>
          <Styled.HeaderLocalizationLink
            to="#"
            style={{
              color: activeLng === "nl" ? theme.color.blue.default : "",
            }}
            onClick={() => handleLng("nl")}
          >
            Nl
          </Styled.HeaderLocalizationLink>
        </Styled.HeaderLocalizationWrap>
        <Styled.HeaderNavigationMessage to="#">
          <TbBell />
        </Styled.HeaderNavigationMessage>
        <Styled.HeaderAccountWrapper>
          <Styled.HeaderAccountImg src={avatar} alt="some guy with a dog" />
          <Styled.HeaderAccountName>{displayName}</Styled.HeaderAccountName>
          <IoIosArrowDown />
        </Styled.HeaderAccountWrapper>
      </Styled.HeaderNavigationWrapper>
    </Styled.HeaderContainer>
  );
};
