import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section-about">
                    <h2>MyBeautyCorea</h2>
                    <p>Tu tienda de belleza coreana favorita. Ofrecemos los mejores productos para el cuidado de tu piel.</p>
                </div>
                <div className="footer-section-links">
                    <h2>Información</h2>
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section-contact">
                    <h2>Contacto</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Calle 22, Zona Achumani, La Paz, Bolivia</p>
                    <p><i className="fas fa-phone"></i> +591 77568537</p>
                    <p><i className="fas fa-envelope"></i> info@mybeautycorea.com</p>
                </div>
                <div className="footer-section-social">
                    <h2>Síguenos</h2>
                    <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-x"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 MyBeautyCorea | Todos los derechos reservados
            </div>
        </div>
    );
}

export default Footer;
