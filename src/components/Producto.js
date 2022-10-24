
import React, { useState, useEffect } from "react";
import fondo1 from '../img/abstract.jpg'
import fondo2 from '../img/pngtree.jpg'
import fondo3 from '../img/deposit.jpg'
import { getAllproduct  } from "../axios/endPoints";
import Carta from "../components/carta";
import Carousel from 'react-bootstrap/Carousel';
function Producto() {

  const [todosProductos, setProductos] = useState([])

    async function traerProductos() {
        const productosAPI = await getAllproduct ()
        setProductos(productosAPI)
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

export default Producto;