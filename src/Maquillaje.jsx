import m1 from './assets/m1.png';
import m11 from './assets/m11.png';
import m222 from './assets/m222.png';
import m22 from './assets/m22.png';
import m3 from './assets/m3.png';
import m33 from './assets/m33.png';
import m4 from './assets/m4.png';
import m44 from './assets/m44.png';
import m5 from './assets/m5.png';
import m55 from './assets/m55.png';
import m6 from './assets/m6.png';
import m66 from './assets/m66.png';
import m7 from './assets/m7.png';
import m77 from './assets/m77.png';
import m8 from './assets/m8.png';
import m88 from './assets/m88.png';
import './Maquillaje.css';

const productos = [
    {
        id: 1,
        nombre: 'AVOCADO & OLIVE LIP BALM',
        imagen1: m1,
        imagen2: m11,
        precio: '120 Bs.'
    },
    {
        id: 2,
        nombre: 'AVOCADO & SUGAR LIP SCRUB',
        imagen1: m222,
        imagen2: m22,
        precio: '80 Bs.'
    },
    {
        id: 3,
        nombre: 'AVOCADO LIP BALM STICK',
        imagen1: m3,
        imagen2: m33,
        precio: '75 Bs.'
    },
    {
        id: 4,
        nombre: 'BUTTERY CHEEK CAKE TWIN',
        imagen1: m4,
        imagen2: m44,
        precio: '100 Bs.'
    },
    {
        id: 5,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (15g)',
        imagen1: m5,
        imagen2: m55,
        precio: '90 Bs.'
    },
    {
        id: 6,
        nombre: 'PEACH COTTON MULTI FINISH POWDER (5g)',
        imagen1: m6,
        imagen2: m66,
        precio: '50 Bs.'
    },
    {
        id: 7,
        nombre: 'SALMON DARK CIRCLE CONCEALER CREAM',
        imagen1: m7,
        imagen2: m77,
        precio: '120 Bs.'
    },
    {
        id: 8,
        nombre: 'TOMATO JELLY TINT LIP',
        imagen1: m8,
        imagen2: m88,
        precio: '95 Bs.'
    }
];

const Maquillaje = () => {
    return (
        <div className="maquillaje-container">
            <h1>Productos de Maquillaje</h1>
            <p id='maqui'>Encuentra los mejores productos de maquillaje basados en la experiencia de nuestros clientes.</p>
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
                            <p className="producto-maquillaje">{producto.precio}</p>
                            <a href="#" className="producto-boton">Comprar</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Maquillaje;