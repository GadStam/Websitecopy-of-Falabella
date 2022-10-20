import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Producto';
import Layout from './components/Layout';
import QuienesSomos from './components/QnSomos';
import Inicio from './views/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Inicio />}/>
            <Route path="/qnessomos" element={<QuienesSomos />}/>
            <Route path="/productos" element={<Productos />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
