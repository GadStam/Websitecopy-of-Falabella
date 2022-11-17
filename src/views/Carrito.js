import React, { useState } from "react";
import CarritoProvider, { CarritoContext } from '../contextState'
import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap';
import { useEffect } from "react";
function Carrito() {
    const {carrito} = React.useContext(CarritoContext);
    const {setCarrito} = React.useContext(CarritoContext);


    return(
        <div>{carrito.length > 0 ?  carrito.map(producto => {
            return <div className="producto" key={producto.producto.id}>
                <Link to={`/Detalle/${producto.producto.id}`}>
                    <div style={{marginTop: 30}}>
                    <img className='chica' src={producto.producto.thumbnail} alt=""></img>
                    <div>{producto.producto.title}</div>
                    </div>
                </Link>
            </div>

    }) : "no hay productos"}</div>
    )
}

export default Carrito;

