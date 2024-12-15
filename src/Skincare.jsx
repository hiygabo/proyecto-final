import './Skincare.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards.jsx';
import Cards2 from './Cards2.jsx';
import Carrusel2 from './Carrusel2.jsx';
function Skincare( ) {
    return (
        <div>
            <div className="tittle">
                <span id="span">Skincare Coreano</span>
                <span>Explora los mejores productos para el cuidado de tu piel y transforma tu rutina diaria</span>
            </div>
            <Carrusel2 />
            <Cards />
            <Cards2/>
        </div>
    );
}

export default Skincare;