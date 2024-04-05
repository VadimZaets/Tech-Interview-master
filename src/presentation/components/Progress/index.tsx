import React, { FC, useEffect, useState } from "react";
import * as Styled from "./styled";
import { FaCheck } from "react-icons/fa";
import { ProfileData } from "../../pages";

export const Progress: FC<{ profile: ProfileData }> = ({ profile }) => {
  const [progressCount, setProgressCount] = useState(0);
  const [percentCount, setPercentCount] = useState(0);

  useEffect(() => {
    const count = Object.values(profile).filter(
      (value) => value === true
    ).length;

    setProgressCount(count);
    let percent = 0;
    switch (count) {
      case 1:
        percent = 25;
        break;
      case 2:
        percent = 50;
        break;
      case 3:
        percent = 75;
        break;
      case 4:
        percent = 100;
        break;
      default:
        percent = 0;
    }
    setPercentCount(percent);
  }, [profile]);

  return (
    <Styled.CompleteSection>
      <Styled.GlobalProgressContainer>
        <Styled.GlobalProgressTextContainer>
          <Styled.GlobalProgressTitle>
            You successfully complete your profile at Tipaw
          </Styled.GlobalProgressTitle>
          {percentCount === 100 && (
            <Styled.GlobalProgressText>
              Now you can use Tipaw for 100% 🎉
            </Styled.GlobalProgressText>
          )}
        </Styled.GlobalProgressTextContainer>
        <Styled.ProgressBarContainer>
          <Styled.ProgressBarTextWrap>
            <Styled.ProgressBarTitle>Profile Completed</Styled.ProgressBarTitle>

            <Styled.ProgressBarPercent>
              {percentCount}%
            </Styled.ProgressBarPercent>
          </Styled.ProgressBarTextWrap>
          <Styled.ProgressBarWrapper>
            <Styled.ProgressBarComponent now={progressCount >= 1 ? 100 : 0} />

            <Styled.ProgressBarComponent now={progressCount >= 2 ? 100 : 0} />

            <Styled.ProgressBarComponent now={progressCount >= 3 ? 100 : 0} />

            <Styled.ProgressBarComponent now={progressCount >= 4 ? 100 : 0} />
          </Styled.ProgressBarWrapper>
        </Styled.ProgressBarContainer>
      </Styled.GlobalProgressContainer>

      <Styled.ProgressContainer>
        <Styled.ProgressItem>
          {profile.verified && (
            <Styled.ProgressCheck>
              <FaCheck />
            </Styled.ProgressCheck>
          )}
          <Styled.ProgressTitle>Verification</Styled.ProgressTitle>
          <Styled.ProgressText>You verified your account</Styled.ProgressText>
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          {profile.profilePictureIsVerified && (
            <Styled.ProgressCheck>
              <FaCheck />
            </Styled.ProgressCheck>
          )}
          <Styled.ProgressTitle>Profile picture</Styled.ProgressTitle>
          <Styled.ProgressText>
            You added your profile picture
          </Styled.ProgressText>
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          {profile.parentsVerified && (
            <Styled.ProgressCheck>
              <FaCheck />
            </Styled.ProgressCheck>
          )}
          <Styled.ProgressTitle>Parents</Styled.ProgressTitle>
          <Styled.ProgressText>You added the parents</Styled.ProgressText>
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          {profile.litterVerified && (
            <Styled.ProgressCheck>
              <FaCheck />
            </Styled.ProgressCheck>
          )}
          <Styled.ProgressTitle>Litter</Styled.ProgressTitle>
          <Styled.ProgressText>Your created the litter</Styled.ProgressText>
        </Styled.ProgressItem>
      </Styled.ProgressContainer>
    </Styled.CompleteSection>
  );
};
