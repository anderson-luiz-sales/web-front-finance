import { Router } from './router';
import GlobalStyle from './styles/global';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
