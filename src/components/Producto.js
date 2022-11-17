
import React, { useState, useEffect, useContext } from "react";
import fondo1 from '../img/abstract.jpg'
import fondo2 from '../img/pngtree.jpg'
import fondo3 from '../img/deposit.jpg'
import Button from 'react-bootstrap/Button';
import { getAllproduct  } from "../axios/endPoints";
import Carta from "../components/carta";

import Carousel from 'react-bootstrap/Carousel';
function Producto() {

  const [todosProductos, setProductos] = useState([])
    async function traerProductos() {
        const productosAPI = await getAllproduct()
        
        setProductos(productosAPI.products)
    }

    useEffect((e) => {
        traerProductos()

    }, []);



    return (
        <React.Fragment >
       

        <div className="container">
        <div className="row">

        {
                todosProductos.map((product) => (

                    <div className="col-md-4" key={product.id}>
                        <Carta
                            
                            id= {product.id}
                            title={product.title}
                            description={product.description}
                            img={product.thumbnail}
                        />
                        
                    </div>
                   

                ))
        }
        <Button style={{backgroundColor: '#ABD600', border: 'none'}}>Detalle producto</Button>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Producto;