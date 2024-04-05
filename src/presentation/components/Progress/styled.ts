import styled from "@emotion/styled";
import { theme } from "../../../application/theme";
import ProgressBar from 'react-bootstrap/ProgressBar';

export const CompleteSection = styled.div`
  background-color: ${theme.color.light.default};
  border: ${theme.color.border};
  border-radius: 4px;
`;

export const GlobalProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: ${theme.color.border};
`;
export const GlobalProgressTextContainer = styled.div`
 min-height:64px ;

`;
export const GlobalProgressTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${theme.color.blue.default};
  margin-bottom: 16px;
`;
export const GlobalProgressText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${theme.color.dark.shadeLighter};
`;
export const ProgressBarContainer = styled.div`
  width: 336px;
`;
export const ProgressBarTextWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

`;
export const ProgressBarTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

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
  & > .progress-bar{
    background-color: ${theme.color.green.default};
  }
  
  
`;
export const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
 

  align-items: center;
  padding: 40px;
`;
export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 140px;
  padding: 24px;
  border: ${theme.color.border};
  border-radius:4px ;
  box-shadow: -1px 3px 16px 0px #959DA530;
`;
export const ProgressCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius:50px;
  background-color: ${theme.color.green.default};
  margin-bottom:16px;
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