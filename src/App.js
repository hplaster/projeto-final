import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NavBarra from './components/NavBarra';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarra/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;