import './Ofertas.css';

// Importación de imágenes desde la carpeta de assets
import d1 from './assets/d1.png';
import d11 from './assets/d11.png';
import m222 from './assets/m222.png';
import m22 from './assets/m22.png';
import m3 from './assets/m3.png';
import m33 from './assets/m33.png';
import d2 from './assets/d2.png';
import d22 from './assets/d22.png';
import m5 from './assets/m5.png';
import m55 from './assets/m55.png';
import m6 from './assets/m6.png';
import m66 from './assets/m66.png';
import m7 from './assets/m7.png';
import m77 from './assets/m77.png';
import d3 from './assets/d3.png';
import d33 from './assets/d33.png';

// Lista de productos
const productos = [
    {
        id: 1,
        nombre: 'ALOE VERA 93% SOOTHING GEL',
        imagen1: d1,
        imagen2: d11,
        precio: '120 Bs.',
        descuento: '80 Bs.'
    },
    {
        id: 2,
        nombre: 'AVOCADO & SUGAR LIP SCRUB',
        imagen1: m222,
        imagen2: m22,
        precio: '80 Bs.',
        descuento: '60 Bs.'
    },
    {
        id: 3,
        nombre: 'AVOCADO LIP BALM STICK',
        imagen1: m3,
        imagen2: m33,
        precio: '75 Bs.',
        descuento: '35 Bs.'
    },
    {
        id: 4,
        nombre: 'SOUS VIDE MASK SHEET',
        imagen1: d2,
        imagen2: d22,
        precio: '100 Bs.',
        descuento: '70 Bs.'
    },
    {
        id: 5,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (15g)',
        imagen1: m5,
        imagen2: m55,
        precio: '90 Bs.',
        descuento: '60 Bs.'
    },
    {
        id: 6,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (5g)',
        imagen1: m6,
        imagen2: m66,
        precio: '50 Bs.',
        descuento: '20 Bs.'
    },
    {
        id: 7,
        nombre: 'SALMON DARK CIRCLE CONCEALER CREAM',
        imagen1: m7,
        imagen2: m77,
        precio: '120 Bs.',
        descuento: '80 Bs.'
    },
    {
        id: 8,
        nombre: 'MINT SPARKLING FOOT PEELING SOCKS',
        imagen1: d3,
        imagen2: d33,
        precio: '95 Bs.',
        descuento: '65 Bs.'
    }
];

const Ofertas = () => {
    return (
        <div className="maquillaje-container">
            <h1>Ofertas de la semana</h1>
            <p id='ofer'>Aprovecha las ofertas exclusivas de esta semana</p>
            <div className="productos-grid">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <div className="producto-imagen">
                            <img src={producto.imagen1} alt={producto.nombre} className="primary" />
                            <img src={producto.imagen2} alt={producto.nombre} className="secondary" />
                        </div>
                        <div className="producto-info">
                            <h2>{producto.nombre}</h2>
                            <p>Descripción del producto</p>
                            <p className="producto-precio">{producto.precio}</p>
                            <p className='descuento'>{producto.descuento}</p>
                            <a href="#" className="producto-boton">Comprar</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ofertas;