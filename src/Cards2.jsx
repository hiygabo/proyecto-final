import pr5 from './assets/pr5.png';
import pr6 from './assets/pr6.jpg';
import pr7 from './assets/pr7.jpg';
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
function Cards2(){
    return(
        <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={pr5}
      top
    width="100%"
 
    />
    <CardBody>
      <CardTitle tag="h5">
      Glutathione Niacinamide Beauty Tablet (30 tablets)
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        68 Bs.
      </CardSubtitle>
      <CardText>
      • 30 comprimidos, cada uno de 500 mg. <br />
      • Las calorías de 1 comprimido son 1,9 kcal. <br />
      • Contiene glutatión y niacinamida. <br />
      • Fabricado en instalaciones con certificación HACCP. <br />
      • Comprimido pequeño y fácil de tragar. <br />

      </CardText>
      <Button>
      Quiero comprarlo
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={pr7}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      The 6 Peptide Skin Booster Serum 150ml
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        127 Bs.
      </CardSubtitle>
      <CardText>
      • Mejora el estado general de la piel, como los poros y el sebo, la firmeza, las líneas finas, la textura y el tono de la piel y la suavidad. <br />
    • Deja la piel suave y tersa, con un tono y una textura perfectos después de su uso. <br />
    • Textura ligera y no pegajosa que se absorbe rápidamente. <br />
      </CardText>
      <Button>
      Quiero comprarlo
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={pr6}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Intensive Glutathione Collagen W 2g*30sticks
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        250 Bs.
      </CardSubtitle>
      <CardText>
      • Contiene la fórmula especial SF3X-7, que está formulada con 7 tipos de ingredientes: L-arginina, ácido L-glutámico, concentrado de uva roja en polvo, extracto de hematopoyesis en polvo, anís estrellado en polvo, jengibre en polvo, gel de aloe. <br />
      • Contiene glutatión y colágeno de bajo peso molecular. <br />
      • Polvo con textura de seda fácil de tomar. <br />
      </CardText>
      <Button>
      Quiero comprarlo
      </Button>
    </CardBody>
  </Card>
</CardGroup>
    )
}
export default Cards2;