import styled from "styled-components";
import logo from 'images/logo.png';

const CenteredFlexDefault = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BootstrapButtonDefault = styled.button.attrs({
  className: 'btn btn-lg btn-secondary'
})``;

export const StyledPageWrapper = styled(CenteredFlexDefault)`
  background-color: ${ props => props.theme.background.color };
  flex-direction: column;
  margin: auto;
  // max-width: 540px;
  min-width: 360px;
  width: 100vw;
  height: 100vh;
`;
export const StyledLogoWrapper = styled(CenteredFlexDefault)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  max-width: 420px;
  width: 80%;
`;
export const StyledLogoImage = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  // object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const StyledInputWrapper = styled(CenteredFlexDefault)`
  flex-direction: column;
  justify-content: flex-end;
  height: 15%;
  width: 80%;
  max-width: 420px;
`;
export const StyledInput = styled.input`
  border: 0;
  width: 100%;
  height: 2rem;
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.8rem;
`;
export const StyledButtonWrapper = styled(CenteredFlexDefault)`
  flex-direction: column;
  justify-content: flex-end;
  // margin: 5px auto;
  height: 12%;
  width: 80%;
  max-width: 420px;
`;
export const StyledButtonLoginWrapper = styled(CenteredFlexDefault)`
  width: 100%;
  height: 55%;
  margin-bottom: 0.5rem;
`;
export const StyledButtonRegForgetWrapper = styled(CenteredFlexDefault)`
  justify-content: flex-end;
  width: 100%;
  height: 35%;
`;
export const StyledLoginButton = styled(BootstrapButtonDefault)`
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;
export const StyledRegForgotButton = styled(BootstrapButtonDefault)`
  width: 25%;
  height: 100%;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;