import styled from "@emotion/styled";
import { theme } from "../../../application/theme";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px 24px 24px;
  background-color: ${theme.color.light.default};
  border-bottom: ${theme.color.border};
`;
export const HeaderLogo = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 375px) {
    font-size: 18px;
  }
  cursor: pointer;
`;
export const HeaderNavigationWrapper = styled.div`
  width: 146px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 375px) {
    width: 170px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
`;
export const HeaderLocalizationWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  @media (min-width: 375px) {
    width: 58px;
  }
`;
export const HeaderLocalizationLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${theme.color.medium.shade};
  transition: all 0.4s;

  @media (min-width: 1200px) {
    &:hover {
      color: ${theme.color.blue.default};
    }
  }
`;
export const HeaderDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50px;
  background-color: ${theme.color.blue.default};
`;
export const HeaderNavigationMessage = styled(Link)`
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    color: ${theme.color.medium.shade};
    transition: all 0.4s;
  }

  @media (min-width: 1200px) {
    &:hover > svg {
      color: ${theme.color.blue.default};
    }
  }
`;
export const HeaderAccountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    width: 170px;
  }

  cursor: pointer;
  & > svg {
    display: none;
    width: 24px;
    height: 24px;
    color: ${theme.color.medium.shade};
    transition: all 0.4s;
    @media (min-width: 768px) {
      display: inline;
    }
  }
  @media (min-width: 1200px) {
    &:hover > svg {
      color: ${theme.color.blue.default};
    }
    &:hover > p {
      color: ${theme.color.blue.default};
    }
  }
`;
export const HeaderAccountImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;
export const HeaderAccountName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 16px;
  transition: all 0.4s;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;
