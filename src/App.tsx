import LoginPage from './pages/login';
import Chat from './pages/chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
