import pr1 from './assets/pr1.jpg';
import pr3 from './assets/pr3.jpg';
import pr4 from './assets/pr4.png';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardGroup
  } from 'reactstrap';
function Cards(){
    return(
        <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={pr1}
      top
    width="100%"
 
    />
    <CardBody>
      <CardTitle tag="h5">
      Hyaluronic Acid Water Sleeping Mask 100ml
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        119 Bs.
      </CardSubtitle>
      <CardText>
      • Mascarilla de noche con ácido hialurónico y agua
      • Recarga la energía de hidratación que se agota durante el día.
      • Hidratación y energía perdidas durante el día. Hidrata mientras duermes.
      </CardText>
      <Button>
        Quiero comprarlo
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={pr3}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Madagascar Centella Tone Brightening Capsule Ampoule 100ml
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        97 Bs.
      </CardSubtitle>
      <CardText>
      • Una ampolla ideal para uso diario con 4 % de niacinamida, 2 % de ácido tranexámico y Madewhite™ encapsulado para una corrección suave y eficaz de las manchas oscuras.<br></br>
      • Un tónico de doble función que proporciona una hidratación profunda y mejora el tono de la piel.<br></br>
      • Ampolla con textura similar a una esencia con microperlas de madecassoside que se derrite inmediatamente sobre la piel y se absorbe rápidamente con un acabado suave y no pegajoso.<br></br>
      </CardText>
      <Button>
      Quiero comprarlo
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={pr4}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Dark Spot Correcting Glow Serum 50ml
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        108 Bs.
      </CardSubtitle>
      <CardText>
      • El suero iluminador corrector de manchas oscuras ilumina la piel de manera eficaz y ayuda a reducir la aparición de manchas oscuras e hiperpigmentación. <br />
      • Apto para todo tipo de pieles, especialmente para pieles sensibles y propensas al acné. <br />
      • Contiene un 5 % de niacinamida y extracto de papaya como elementos iluminadores. Nota cómo tu piel brilla más con cada aplicación. Contiene escualano vegano para una hidratación eficaz. <br />
      • Consigue una piel de lo más radiante con este suero, con una fórmula diseñada para corregir las manchas oscuras y el tono desigual de la piel, revelando una tez radiante y uniforme. <br />
      </CardText>
      <Button>
      Quiero comprarlo
      </Button>
    </CardBody>
  </Card>
</CardGroup>
    )
}
export default Cards;