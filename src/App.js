import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Component/Assets/Login';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
  </Routes>
  <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
