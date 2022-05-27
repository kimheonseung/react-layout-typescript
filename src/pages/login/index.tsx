import { useState, KeyboardEvent } from 'react';
import { 
	StyledPageWrapper, 
	StyledInputWrapper, 
	StyledInput, 
	StyledLogoWrapper, 
	StyledLogoImage, 
	StyledButtonWrapper,
	StyledButtonLoginWrapper,
	StyledButtonRegForgetWrapper,
	StyledLoginButton,
	StyledRegForgotButton,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faQuestion } from '@fortawesome/free-solid-svg-icons';

function LoginPage() {

	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");

	const handleEnterDown = (e: KeyboardEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		if(e.key === 'Enter')
			submitLogin();
	}
	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
	}

	const submitLogin = () => {
		console.log(userId, password)
	}

  return (
		<StyledPageWrapper>
			<StyledLogoWrapper >
				<StyledLogoImage />
			</StyledLogoWrapper>
			<StyledInputWrapper>
				<StyledInput
					id='userId'
					type='text'
					required
					autoFocus
					autoComplete='off'
					value={userId}
					onChange={({target: {value}}) => setUserId(value)}
					onKeyDown={handleEnterDown}
					placeholder='Enter ID' 
					/>
				<StyledInput
					id='password'
					type='password'
					required
					value={password}
					onChange={({target: {value}}) => setPassword(value)}
					onKeyDown={handleEnterDown}
					placeholder='Enter PW' 
					/>
    	</StyledInputWrapper>
			<StyledButtonWrapper>
				<StyledButtonLoginWrapper>
					<StyledLoginButton>
						<FontAwesomeIcon icon={faSignInAlt} />
					</StyledLoginButton>
				</StyledButtonLoginWrapper>
				<StyledButtonRegForgetWrapper>
					<StyledRegForgotButton>
						<FontAwesomeIcon icon={faUserPlus} />
					</StyledRegForgotButton>
					<StyledRegForgotButton>
						<FontAwesomeIcon icon={faQuestion} />
					</StyledRegForgotButton>
				</StyledButtonRegForgetWrapper>
			</StyledButtonWrapper>
		</StyledPageWrapper>
  );
}

export default LoginPage;