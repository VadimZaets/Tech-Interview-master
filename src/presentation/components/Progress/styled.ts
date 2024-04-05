import styled from "@emotion/styled";
import { theme } from "../../../application/theme";
import ProgressBar from "react-bootstrap/ProgressBar";

export const CompleteSection = styled.div`
  background-color: ${theme.color.light.default};
  border: ${theme.color.border};
  border-radius: 4px;
`;

export const GlobalProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: ${theme.color.border};
  @media (min-width: 768px) {
    padding: 30px 40px 39px 39px;
    flex-direction: row;
  }
`;
export const GlobalProgressTextContainer = styled.div`
  height: 88px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 100%;
    height: 60px;
  }
`;
export const GlobalProgressTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: 375px) {
    font-size: 18px;
  }
  color: ${theme.color.blue.default};
  margin-bottom: 13px;
`;
export const GlobalProgressText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  @media (min-width: 375px) {
    font-size: 14px;
  }
  color: ${theme.color.dark.shadeLighter};
`;
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 64px;
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 491px;
  }
`;
export const ProgressBarTextWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;
export const ProgressBarTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: 375px) {
    font-size: 18px;
  }
`;
export const ProgressBarPercent = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: ${theme.color.green.default};
`;

export const ProgressBarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4px;
`;
export const ProgressBarComponent = styled(ProgressBar)`
  width: 100%;
  height: 8px;
  & > .progress-bar {
    background-color: ${theme.color.green.default};
  }
`;
export const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    padding: 40px 38px 40px 40px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 140px;
  padding: 23px 23px 23px 22px;
  border: ${theme.color.border};
  border-radius: 4px;
  box-shadow: -1px 3px 16px 0px #959da530;
  @media (min-width: 1200px) {
    width: 244px;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;
export const ProgressCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: ${theme.color.green.default};
  margin-bottom: 16px;
  & > svg {
    color: ${theme.color.light.default};
  }
`;
export const ProgressTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const ProgressText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;
