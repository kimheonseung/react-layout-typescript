import LoginPage from './pages/login';
import Chat from './pages/chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import { ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import dark from "./styles/themes/dark-style";
import white from "./styles/themes/white-style";

const theme = {
  dark: dark,
  white: white,
}

function App() {
  return (
    <>
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
