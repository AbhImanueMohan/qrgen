import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Component/Assets/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
  </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
