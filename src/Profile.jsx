import './Profile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Profile(){
    return(
        <div className="perfil">
            <div className="elementos">
                <ul>
                    <li className='img'><img src="public/profile.png" alt="" /></li>
                    <li>Hola Usuario</li>
                    <li><i className='fas fa-box'></i>Pedidos</li>
                    <li><i className='fas fa-heart'></i>Favoritos</li>
                    <li><i className='fas fa-download'></i>Descargas</li>
                    <li><i className='fas fa-map-marker-alt'></i>Dirección</li>
                    <li><i className='fas fa-user'></i>Mi cuenta</li>
                    <li><i className='fas fa-sign-out-alt'></i>Cerrar Sesión</li>
                </ul>
            </div>
            <div className="cuenta">
                <h1>Mi cuenta</h1>
               
                    <label htmlFor="nombre">
                    <input type="text" id="nombre" placeholder="Nombre* " />
                    </label>
                    
                    <label htmlFor="nombre">
                    <input type="text" id="apellido" placeholder="apellido*" />
                    </label> <br />
                    
                    <label htmlFor="nombre-en-pantalla">
                    <input type="text" id="nom" placeholder="nombre en pantalla*" />
                    </label> <br />
                    <label htmlFor="direccion-correo">
                    <input type="text" id="Dirección-de-correo" placeholder="Dirección de correo*" />
                    </label>
                    
                <h1>Cambiar contraseña</h1>
                
                    
                    <label htmlFor="actual">
                    <input type="text" id="actual" placeholder="Contraseña actual*" />
                    </label> <br />
                    <label htmlFor="nueva">
                    <input type="text" id="nueva" placeholder="Nueva Contraseña*" />
                    </label> <br />
                    <label htmlFor="confirmar">
                    <input type="text" id="confirmar" placeholder="Confirma tu contraseña*" />
                    </label> <br />
                <h1>Métodos de pago</h1>
                <label htmlFor="tarjeta">
                    <input type="text" id="tarjeta" placeholder="Número de tarjeta*" />
                    </label> <br />
                    <label htmlFor="fecha">
                    <input type="text" id="fecha" placeholder="MM/DD/YY*" />
                    </label> 
                    <label htmlFor="cvc">
                    <input type="text" id="cvc" placeholder="CVC*" />
                    </label> <br />
                    <label htmlFor="name">
                    <input type="text" id="name" placeholder="Nombre de la tarjeta*" />
                    </label> <br />

                    <div className="pagos">
                    
                        <i className='fab fa-cc-visa'></i>
                        <i className='fab fa-cc-mastercard'></i>
                        <i className='fab fa-cc-paypal'></i>
                        <i className='fab fa-cc-apple-pay'></i>
                        <i className='fab fa-google-wallet'></i>
                    
                </div>

            </div>
            
        </div>
    )
}
export default Profile;