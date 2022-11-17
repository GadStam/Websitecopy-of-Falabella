import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Producto';
import Layout from './components/Layout';
import Detalle from './components/Detalle'
import Inicio from './views/Inicio';
import Error from './views/Error'
import QnSomos from './views/QnSomos'
import Contacto from './views/Contacto'
import Carrito from './views/Carrito'
import CarritoProvider from "./contextState"
function App() {
  return (
    <div className="App">
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Inicio />}/>
            <Route path="/productos" element={<Productos />}/>
            <Route path="/QnSomos" element={<QnSomos />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="/Detalle" >
              <Route path=':id' element={<Detalle />}></Route>
            </Route>
            <Route path="/*" element={<Error />}></Route>
            <Route path="/Carrito" element={<Carrito />}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
