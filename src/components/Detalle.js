import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

import '../App.css';


function Detalle() {

    let { id } = useParams()

    const [detalleProducto, setDetalleProducto] = useState({});
    const [load, setLoad] = useState(false)

    

    return (
       <h1>jjjj</h1>
    );
}

export default Detalle