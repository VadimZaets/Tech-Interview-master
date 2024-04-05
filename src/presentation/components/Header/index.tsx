import * as Styled from "./styled";
import { TbBell } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  name: string;
  avatar: string;
};
export const Header = ({ name, avatar }: Props) => {
  const displayName = name.length > 10 ? `${name.slice(0,9)}...` : name;
  
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogo>My Tipaw</Styled.HeaderLogo>
      <Styled.HeaderNavigationWrapper>
        <Styled.HeaderLocalizationWrap>
          <Styled.HeaderLocalizationLink to="#">
             Fr
          </Styled.HeaderLocalizationLink>
          <Styled.HeaderDot></Styled.HeaderDot>
          <Styled.HeaderLocalizationLink to="#">
            Nl
          </Styled.HeaderLocalizationLink>
           
          </Styled.HeaderLocalizationWrap>
        <Styled.HeaderNavigationMessage to="#">
          <TbBell />
        </Styled.HeaderNavigationMessage>
        <Styled.HeaderAccountWrapper>
          <Styled.HeaderAccountImg
            src={avatar}
            width="50px"
            alt="some guy with a dog"
          />
          <Styled.HeaderAccountName>{displayName}</Styled.HeaderAccountName>
          <IoIosArrowDown />
        </Styled.HeaderAccountWrapper>
      </Styled.HeaderNavigationWrapper>
    </Styled.HeaderContainer>
  );
};
