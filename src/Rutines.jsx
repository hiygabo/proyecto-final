import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge, CardImg } from 'reactstrap';
import './Rutines.css';
import mañana from './assets/mañana.png';
import noche from './assets/noche.png';
import seca from './assets/seca.jpg';
import grasosa from './assets/grasosa.jpeg';
import edad from './assets/edad.jpg';
import hidratacion from './assets/hidratacion.png';


function Rutines() {
  const rutinas = [
    {
      titulo: 'Rutina Básica para la Mañana',
      imagen: mañana,
      pasos: [
        { paso: 1, descripcion: 'Limpiador facial suave', producto: 'Clean It Zero - Banila Co.' },
        { paso: 2, descripcion: 'Tónico hidratante', producto: 'Supple Preparation Toner - Klairs' },
        { paso: 3, descripcion: 'Protector solar (SPF 50)', producto: 'Aloe Soothing Sun Cream - COSRX' },
      ],
    },
    {
      titulo: 'Rutina Completa para la Noche',
      imagen: noche,
      pasos: [
        { paso: 1, descripcion: 'Aceite limpiador para maquillaje', producto: 'Deep Cleansing Oil - DHC' },
        { paso: 2, descripcion: 'Espuma limpiadora', producto: 'Low pH Good Morning Gel Cleanser - COSRX' },
        { paso: 3, descripcion: 'Sérum reparador', producto: 'Advanced Snail 96 Mucin Power Essence - COSRX' },
        { paso: 4, descripcion: 'Crema hidratante nocturna', producto: 'Ceramidin Cream - Dr.Jart+' },
      ],
    },
    {
      titulo: 'Rutina para Piel Sensible',
      imagen: seca,
      pasos: [
        { paso: 1, descripcion: 'Agua micelar calmante', producto: 'Cicapair Tiger Grass Calming Mist - Dr.Jart+' },
        { paso: 2, descripcion: 'Tónico sin alcohol', producto: 'Calendula Herbal-Extract Toner - Kiehl’s' },
        { paso: 3, descripcion: 'Mascarilla calmante de centella', producto: 'Madecassoside Sheet Mask - A’Pieu' },
        { paso: 4, descripcion: 'Crema reparadora con ceramidas', producto: 'Cicaplast Baume B5 - La Roche-Posay' },
      ],
    },
    {
      titulo: 'Rutina Intensiva para Piel Grasosa',
      imagen: grasosa,
      pasos: [
        { paso: 1, descripcion: 'Espuma limpiadora control de sebo', producto: 'Jeju Volcanic Pore Cleansing Foam - Innisfree' },
        { paso: 2, descripcion: 'Tónico exfoliante suave', producto: 'AHA/BHA Clarifying Treatment Toner - COSRX' },
        { paso: 3, descripcion: 'Mascarilla de arcilla', producto: 'Super Volcanic Clay Mask 2X - Innisfree' },
        { paso: 4, descripcion: 'Hidratante en gel', producto: 'Water Bank Hydro Gel - Laneige' },
      ],
    },
    {
      titulo: 'Rutina Especial Antiedad',
      imagen: edad,
      pasos: [
        { paso: 1, descripcion: 'Limpiador antioxidante', producto: 'Green Tea Foam Cleanser - Innisfree' },
        { paso: 2, descripcion: 'Sérum con colágeno', producto: 'Collagen Ampoule - Mizon' },
        { paso: 3, descripcion: 'Crema reafirmante', producto: 'Time Revolution Night Repair - Missha' },
        { paso: 4, descripcion: 'Mascarilla nocturna', producto: 'Water Sleeping Mask - Laneige' },
      ],
    },
    {
      titulo: 'Rutina de Hidratación Profunda',
      imagen: hidratacion,
      pasos: [
        { paso: 1, descripcion: 'Limpiador hidratante', producto: 'Moisture Foam Cleanser - Pyunkang Yul' },
        { paso: 2, descripcion: 'Esencia con ácido hialurónico', producto: 'Hyaluronic Acid Essence - Isntree' },
        { paso: 3, descripcion: 'Mascarilla hidratante', producto: 'Hyaluronic Hydra Sheet Mask - Dr.Jart+' },
        { paso: 4, descripcion: 'Crema humectante', producto: 'Ultra Facial Cream - Kiehl’s' },
      ],
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Rutinas de Skincare Coreano</h2>
      <p className="text-center text-muted mb-5">
        Descubre la rutina perfecta para tu tipo de piel y transforma tu cuidado facial con productos de alta calidad.
      </p>
      <Row>
        {rutinas.map((rutina, index) => (
          <Col md="6" lg="4" key={index} className="mb-4">
            <Card className="h-100 rutina-card">
              <CardImg top width="100%" src={rutina.imagen} alt={rutina.titulo} />
              <CardBody>
                <CardTitle tag="h5" className="text-center mb-3">
                  {rutina.titulo}
                </CardTitle>
                {rutina.pasos.map((paso, idx) => (
                  <CardText key={idx} className="mb-2">
                    <Badge color="primary" className="me-2">
                      Paso {paso.paso}
                    </Badge>
                    {paso.descripcion} - <strong>{paso.producto}</strong>
                  </CardText>
                ))}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Rutines;
