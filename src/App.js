
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarIco from './components/NavbarIco';
import SelectPokemon from './view/SelectPokemon';
import Home from './view/Home';
import DetallePokemon from './view/DetallePokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarIco/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="pokemones" element={<SelectPokemon />}/>
          <Route path="pokemones/:name" element={<DetallePokemon/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
