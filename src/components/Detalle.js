import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductById} from '../axios/endPoints'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';


function Detalle() {

    let { id } = useParams()

    const [detalle, setDetalle] = useState({});


    const getDetalleProducto = async (e) => {
        await getProductById(id).then((response) => {
            setDetalle(response);
          
        }).catch(() => {
          console.log("error")
    
        });
      }
    

        useEffect(() => {
        (async () => {
        await getDetalleProducto()
        })()
            
        }, [id]);

    

    return (
        <Card style={{marginTop: '2rem', borderColor: '#ABD600'}}>
      <Card.Img variant="top" src={detalle.thumbnail} style={{ height: 200}}/>
      <Card.Body  style={{borderColor: 'red'}}>
        <Card.Title>{detalle.title}</Card.Title>
        <Card.Text>
        {detalle.description}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
  <ListGroup.Item> Precio: {detalle.price}</ListGroup.Item>
  <ListGroup.Item>Descuento: {detalle.discountPercentage}</ListGroup.Item>
  <ListGroup.Item>Puntaje: {detalle.rating}</ListGroup.Item>
  <ListGroup.Item> Stock: {detalle.stock}</ListGroup.Item>
  <ListGroup.Item>Marca: {detalle.brand}</ListGroup.Item>
  


</ListGroup>
    </Card>


    );
}

export default Detalle