import styled from "@emotion/styled";
import { theme } from "../../../application/theme";

// Feel free to change / add / remove components however you wish
export const globalStyles = `
  body {
    background-color: ${theme.color.background};
    font-family: ${theme.font.default} ;
    color:${theme.color.dark.tint};
    margin: 0;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  margin: 0;
}
a{
  text-decoration:none;
}
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px 24px;
  gap: 48px;
`;
