import react from 'react'
import Card from 'react-bootstrap/Card';
import imgFala from '../img/Falabella.png'
function QnSomos(){
    return(
        <Card>
        <Card.Img variant="top" src={imgFala} />
        <Card.Body>
          <Card.Text>
          Nuestro propósito es simplificar la vida de las personas en América Latina, transformando sus experiencias de compra.

Para esto, estamos impulsando una profunda transformación cultural y una nueva manera de trabajar mirando a los próximos años, potenciando capacidades que ya son parte de nuestra propuesta de valor e incorporando otras nuevas. En este contexto, entendemos la necesidad de convertirnos en una organización más ágil y flexible, manteniendo nuestra tradición de tener al cliente y a nuestros colaboradores siempre al centro de toda nuestra gestión. Esta constante transformación cultural que impulsamos está basada en vivir y promover nuestros valores y principios corporativos, los cuales son claves para el desarrollo de la estrategia de Ecosistema y constituyen el motor de nuestras acciones en el día a día.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default QnSomos;