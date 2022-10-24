import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
function Carta(props) {
  return (
    <Card style={{marginTop: '2rem' }}>
      <Card.Img variant="top" src={props.img} style={{ height: 200}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Link to={`/Detalle/${props.key}`}>
        <Button variant="success">Detalle producto</Button>
                </Link>
       
      </Card.Body>
    </Card>
  );
}

export default Carta;

