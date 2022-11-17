import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const Contacto = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Contacto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="mail" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" name="nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Apellido" name="apellido" />
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{ marginBottom:400}}>
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
}

export default Contacto;