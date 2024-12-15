import './Box.css';
function Box(){
    return(
    <>
    <div className="cuerpo">
    <div className="box1">
            <div className="acne">
                { <p>ACNE TREATMENT</p> }
            </div>
            <h3>Despídete de las imperfecciones</h3>
            <a href="#">Ver más productos</a>
        </div>
        <div className="box2">
            <div className="honey">
                {<p>ROYAL HONEY COLLECTION</p>}
            </div>
            <h3>Producto hechos de miel natural</h3>
            <a href="#">Ver más productos</a>
        </div>
    </div>
        
    </>
    )
}export default Box;