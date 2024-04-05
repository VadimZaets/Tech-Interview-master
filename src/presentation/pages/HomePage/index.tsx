import React, { FC } from "react";
import { HomePageProps } from "./types";
import * as Styled from "./styled";

import { Global } from "@emotion/react";
import { Header } from "../../components/Header";
import { Progress } from "../../components/Progress";
import "bootstrap/dist/css/bootstrap.min.css";
import { Announcements } from "../../components/Announcements";

export * from "./types";

/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
export const HomePage: FC<HomePageProps> = (props) => {
  const { announcements, profile } = props;
  
  
  return (
    <>
      <Header name={profile.name} avatar={profile.avatar} />
      <Styled.Layout>
        <Progress profile={profile}/>
        <Announcements announcements={announcements}/>
      </Styled.Layout>
      <Global styles={Styled.globalStyles} />
    </>
  );
};
