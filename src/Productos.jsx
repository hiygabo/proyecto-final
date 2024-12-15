import './Productos.css';

// Importar imágenes desde la carpeta de assets
import c1 from './assets/c1.png';
import c1Hover from './assets/c1-hover.png';
import c2 from './assets/c2.jpg';
import c2Hover from './assets/c2-hover.png';
import c3 from './assets/c3.jpg';
import c3Hover from './assets/c3-hover.png';
import c4 from './assets/c4.png';
import c4Hover from './assets/c4-hover.png';

function Productos() {
    return (
        <>
            <h3 className="titulo-productos">PRODUCTOS HECHOS PARA TÍ</h3>
            <div className="p">
                <div className="img1">
                    <div className="image-container">
                        <img src={c1} alt="Producto 1" className="primary" />
                        <img src={c1Hover} alt="Producto 1 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        BLUE CHAMOMILE HYALURONIC CREAM <br />Bs.250
                    </div>
                </div>
                <div className="img2">
                    <div className="image-container">
                        <img src={c2} alt="Producto 2" className="primary" />
                        <img src={c2Hover} alt="Producto 2 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        VEGE GARDEN CLEANSING FOAM WILD BERRY <br />Bs.200
                    </div>
                </div>
                <div className="img3">
                    <div className="image-container">
                        <img src={c3} alt="Producto 3" className="primary" />
                        <img src={c3Hover} alt="Producto 3 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        EGG WHITE CLEANSING FOAM <br />Bs.320
                    </div>
                </div>
                <div className="img4">
                    <div className="image-container">
                        <img src={c4} alt="Producto 4" className="primary" />
                        <img src={c4Hover} alt="Producto 4 Hover" className="secondary" />
                    </div>
                    <div className="image-text">
                        RICE DAILY BRIGHTENING <br />Bs.220
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productos;
