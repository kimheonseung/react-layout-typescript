import styled from "styled-components";
import logo from 'images/logo.png';

const CenteredFlexDefault = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPageWrapper = styled(CenteredFlexDefault)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
export const StyledLogoWrapper = styled(CenteredFlexDefault)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 40vw;
`;
export const StyledLogoImage = styled.img`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
export const StyledInputWrapper = styled(CenteredFlexDefault)`
  flex-direction: column;
  height: 20vh;
  width: 40vw;
`;
export const StyledInput = styled.input`
  border: 0;
  width: 100%;
  height: 2rem;
  maxlength: 10;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
export const StyledButtonWrapper = styled(CenteredFlexDefault)`
  height: 20vh;
  width: 40vh;
`;