import LoginPage from './pages/login';
import ChatPage from './pages/chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import { ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import dark from "./styles/themes/dark-style";
import light from "./styles/themes/light-style";
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'reducers/themes';
import { RootState } from 'reducers';

const theme = {
  dark: dark,
  light: light,
}

function App() {
  const isThemeDark: boolean = useSelector( (state: RootState) => state.themeChanger.isDark );
  const dispatch = useDispatch();

  const themeChange = (): void => {
		dispatch(change());
	}

  return (
    <>
    <ThemeProvider theme={isThemeDark ? theme.dark : theme.light}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='chat' element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <button onClick={themeChange}>theme</button>
    </ThemeProvider>
    </>
  );
}

export default App;
