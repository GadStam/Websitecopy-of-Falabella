import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {getProductById} from '../axios/endPoints'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CarritoContext } from '../contextState';
import '../App.css';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';



function Detalle() {

    let { id } = useParams()

    const [detalle, setDetalle] = useState({});

    const {carrito, setCarrito} = React.useContext(CarritoContext);

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
            
        }, []);

        const eliminar = () => {
          let nuevoCarrito = carrito
          let index = nuevoCarrito.filter(prod => prod.producto.id !== detalle.id)
          setCarrito(index)
          
      }        
        
        const agregar = () =>{
          let nuevoCarrito = carrito
          nuevoCarrito = [...nuevoCarrito, {producto: detalle}];
          setCarrito(nuevoCarrito)
      }

      useEffect(() => {
        console.log(carrito)
      }, [carrito])

    return (
        <Card style={{marginTop: '2rem', borderColor: '#ABD600'}}>
      <Card.Img variant="top" src={detalle.thumbnail} style={{ height: 500}}/>
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
  
{
  carrito.find((prod) => prod.producto.id === detalle.id)
                            ?
                            <>
                            <ListGroup.Item style={{textAlign: "center"}}><b>Este producto ya está en el carrito</b></ListGroup.Item>
                          
                            <Button type="button" onClick={eliminar}>Eliminar</Button>
                            </>
                            :
                            <Button type="button" onClick={agregar} >Agregar al carrito</Button>
                    }

</ListGroup>
    </Card>


    );
}

export default Detalle