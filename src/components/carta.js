import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import {ProductosType} from '../components/PropT'
import { PropTypes } from 'prop-types';

function Carta(props) {
  return (
    <Card style={{marginTop: '2rem', borderColor: '#ABD600'}}>
      <Card.Img variant="top" src={props.img} style={{ height: 200}}/>
      <Card.Body  style={{borderColor: 'red'}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Link to={`/Detalle/${props.id}`}>
        <Button style={{backgroundColor: '#ABD600', border: 'none'}}>Detalle producto</Button>
                </Link>
       
      </Card.Body>
    </Card>
  );
}
Carta.propTypes = {
  props: ProductosType.isRequired
}

export default Carta;

