import React, { FC, useEffect, useState } from "react";
import * as Styled from "./styled";
import { FaCheck } from "react-icons/fa";
import { ProfileData } from "../../pages";

export const Progress: FC<{ profile: ProfileData }> = ({ profile }) => {
  const [progressCount, setProgressCount] = useState(0);
  const targetProgress = 100;

  useEffect(() => {
    const count = Object.values(profile).filter(
      (value) => value === true
    ).length;

    setProgressCount(count);
  }, [profile]);

  return (
    <Styled.CompleteSection>
      <Styled.GlobalProgressContainer>
        <Styled.GlobalProgressTextContainer>
          <Styled.GlobalProgressTitle>
            You successfully complete your profile at Tipaw
          </Styled.GlobalProgressTitle>
          {profile.globalProgress === targetProgress && (
            <Styled.GlobalProgressText>
              Now you can use Tipaw for 100% 🎉
            </Styled.GlobalProgressText>
          )}
        </Styled.GlobalProgressTextContainer>
        <Styled.ProgressBarContainer>
          <Styled.ProgressBarTextWrap>
            <Styled.ProgressBarTitle>Profile completed</Styled.ProgressBarTitle>

            <Styled.ProgressBarPercent>
              {profile.globalProgress}%
            </Styled.ProgressBarPercent>
          </Styled.ProgressBarTextWrap>
          <Styled.ProgressBarWrapper>
            <Styled.ProgressBarComponent
              now={progressCount >= 1 ? targetProgress : 0}
            />

            <Styled.ProgressBarComponent
              now={progressCount >= 2 ? targetProgress : 0}
            />

            <Styled.ProgressBarComponent
              now={progressCount >= 3 ? targetProgress : 0}
            />

            <Styled.ProgressBarComponent
              now={progressCount >= 4 ? targetProgress : 0}
            />
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
