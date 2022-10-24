import React, { useState, useEffect } from "react";
import fondo1 from '../img/abstract.jpg'
import fondo2 from '../img/pngtree.jpg'
import fondo3 from '../img/deposit.jpg'
import { getTopProducts } from "../axios/endPoints";
import Carta from "../components/carta";
import Carousel from 'react-bootstrap/Carousel';
function Inicio() {

    const [productosDestacados, setProductosDestacados] = useState([])

    async function traerProductos() {
        const productosAPI = await getTopProducts()
        setProductosDestacados(productosAPI)
    }

    useEffect((e) => {
        traerProductos()

    }, []);

    return (
        <React.Fragment >
        <Carousel>
      <Carousel.Item>
        <img
        style={{height:350}}
          className="d-block w-100"
          src={fondo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tienda</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:350}}
          className="d-block w-100"
          src={fondo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fondo verde 1</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:350}}
          className="d-block w-100"
          src={fondo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tienda 2</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        <div className="container">
        <div className="row">

            {
                productosDestacados.map((product) => (

                    <div className="col-md-4">
                        <Carta
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            img={product.thumbnail}
                        />
                    </div>

                ))
        }
        </div>
        </div>
        </React.Fragment>
    )
}

export default Inicio;