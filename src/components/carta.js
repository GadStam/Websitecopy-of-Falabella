import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carta(props) {
  return (
    <Card style={{marginTop: '2rem' }}>
      <Card.Img variant="top" src={props.img} style={{width: '33%', height: 200}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta;

