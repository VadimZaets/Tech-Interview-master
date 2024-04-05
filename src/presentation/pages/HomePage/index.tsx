import React, { FC } from "react";
import { HomePageProps } from "./types";
import { Global } from "@emotion/react";
import { Header } from "../../components";
import { Progress } from "../../components";
import { Announcements } from "../../components";

import * as Styled from "./styled";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Progress profile={profile} />
        <Announcements announcements={announcements} />
      </Styled.Layout>
      <Global styles={Styled.globalStyles} />
    </>
  );
};
