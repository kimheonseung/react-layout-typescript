import styled from "styled-components";

const CenteredFlexDefault = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPageWrapper = styled(CenteredFlexDefault)`
  background-color: ${ props => props.theme.background.color };
  margin: auto;
  // max-width: 540px;
  min-width: 360px;
  width: 100vw;
  height: 100vh;
`;
export const StyledControlWrapper = styled(CenteredFlexDefault)`
  width: 25%;
  height: 100%;
  max-width: 480px;
  min-width: 300px;
  background-color: aliceblue;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
export const StyledChatWrapper = styled(CenteredFlexDefault)`
  width: 75%;
  height: 100%;
  min-width: 420px;
  max-width: 1440px;
  background-color: yellow;
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;