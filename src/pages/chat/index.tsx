import { StyledControlWrapper, StyledChatWrapper, StyledPageWrapper } from "./styles";

function ChatPage() {
  return (
	<>
	<StyledPageWrapper>
		<StyledControlWrapper>
			<h1>this is control</h1>
		</StyledControlWrapper>
		<StyledChatWrapper>
			<h1>this is chat</h1>
		</StyledChatWrapper>
	</StyledPageWrapper>
	</>
  );
}

export default ChatPage;