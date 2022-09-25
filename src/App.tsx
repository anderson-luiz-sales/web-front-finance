import { Router } from './router';
import GlobalStyle from './styles/global';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
