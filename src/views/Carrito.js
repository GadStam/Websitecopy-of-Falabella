import React, { useState } from "react";
import { CarritoContext } from '../contextState'
import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap';
import { useEffect } from "react";
function Carrito() {
    const {carrito} = React.useContext(CarritoContext);
    const {setCarrito} = React.useContext(CarritoContext);
    let varaible = []
    const [show, setShow] = useState(varaible)

    useEffect(() => {
        cargarState()
    }, [])

    const cargarState = () => {
        console.log(carrito)
        for (let producto in carrito) {
            varaible.push(
                <div className="producto" key={carrito[producto].producto.id}>
                    <Link to={`/Detalle/${carrito[producto].producto.id}`}>
                        <img className='chica' src={carrito[producto].producto.thumbnail} alt=""></img>
                    </Link>
                    <div className="text">
                        {carrito[producto].cantidad}
                    </div>
                </div>
            )
        }

        console.log(varaible)
        setShow(varaible);
    }
    return(
        <div>{show.length > 0 ? show : "no hay productos"}</div>
    )
}

export default Carrito;

