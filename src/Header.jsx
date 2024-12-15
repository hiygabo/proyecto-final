import loguito from './assets/loguito.png';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <ul>
        <div className="x">
          <li className='logi'><img src={loguito}></img></li>
        <Link to="/"><li>MyBeautyCorea</li></Link>
          <Link to="/skincare"><li>SKINCARE</li></Link>
          <Link to="/rutinas"><li>RUTINAS</li></Link>
          <Link to="/maquillaje"><li>MAQUILLAJE</li></Link>
          {/* <Link to="/mas-vendidos"><li>TENDENCIA</li></Link> */}
          <Link to="/ofertas"><li>OFERTAS</li></Link>
        </div>
        <div className="buscador">
            <label htmlFor="xd">
                <input type="text" placeholder='Busca lo que necesites'/>
            </label>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-bag"></i>
            <Link to="/profile">
                <i className="fas fa-user"></i> 
            </Link>
        </div>
      </ul>
    </div>
  );
}

export default Header;
