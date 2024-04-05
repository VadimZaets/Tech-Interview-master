import styled from "@emotion/styled";
import { theme } from "../../../application/theme";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  background-color: ${theme.color.light.default};
  border-bottom: ${theme.color.border} ;
`;
export const HeaderLogo = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
`;
export const HeaderNavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 308px;
`;
export const HeaderNavigationMessage = styled(Link)`
  cursor: pointer;
 
  & > svg {
    width: 24px;
    height: 24px;
    color:${theme.color.medium.shade};
    transition: all 0.4s;
  }
  &:hover > svg {
    color: ${theme.color.blue.default};
  }
`;
export const HeaderAccountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 170px;
  cursor: pointer;
  & > svg {
    width: 24px;
    height: 24px;
    color:${theme.color.medium.shade};
    transition: all 0.4s;
  }

  &:hover > svg{
    color: ${theme.color.blue.default};
  }
  &:hover > p{
    color: ${theme.color.blue.default};
  }

`;
export const HeaderAccountImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;
export const HeaderAccountName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 20px;
  transition: all 0.4s;
 
`;