import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Producto';
import Layout from './components/Layout';
import QuienesSomos from './components/QnSomos';
import Detalle from './components/Detalle'
import Inicio from './views/Inicio';
import Error from './views/Error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Inicio />}/>
            <Route path="/qnessomos" element={<QuienesSomos />}/>
            <Route path="/productos" element={<Productos />}/>
            <Route path="/Detalle" >
              <Route path=':id' element={<Detalle />}></Route>
            </Route>
            <Route path="/*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
