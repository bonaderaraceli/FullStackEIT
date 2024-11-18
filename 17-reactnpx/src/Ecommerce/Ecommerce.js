import imag1 from '../image/enargy.webp';
import imag2 from '../image/complex.webp';
import '../App.css';

const Ecommerce = () => {    
    
    
    const carrito = () => {

        alert("Producto agregado al carrito");
        
        const producto = {
            nombre: 'Enargy gel',
            precio: 2500,
            descripcion: 'Ideal para todo trabajo aeróbico. - Con sales de rehidratación.',
            img: imag1
        }
        
        localStorage.setItem('producto', JSON.stringify(producto));
        localStorage.setItem('datos', 'hola gente, soy datos'); /* no hace nada, es un ejemplo */

    }


    return(
        <main className="seccionCards">
        <h2 className="tituloEcommerce">SUPLEMENTOS</h2>
        <section className="fila">
            <div className="card">
                <img src={imag1} alt="Enargy" />
                <div className="cardContenido">
                    <h3 className="cardTitulo">Enargy gel $2500</h3>
                    <p className="cardDescripcion">Ideal para todo trabajo aeróbico. - Con sales de rehidratación.</p>
                    <a href="https://www.educacionit.com/#" className="boton">Leer más</a>
                    <button onClick={carrito} className="comprar">Agregar al carrito</button>
            </div>
            </div>
            <div className="card">
                <img src={imag2} alt="Complex" />
                <div className="cardContenido">
                    <h3 className="cardTitulo">Colageno Complex $4000</h3>
                    <p className="cardDescripcion">Complex ayuda a mantener en perfectas condiciones huesos y cartílagos.</p>
                    <a href="https://www.educacionit.com/" className="boton">Leer más</a>
                    <a href="https://www.educacionit.com/" className="comprar">Agregar al carrito</a>
            </div>
            </div>
            <div className="card">
                <img src={imag1} alt="whey" />
                <div className="cardContenido">
                    <h3 className="cardTitulo">Whey Protein $3500</h3>
                    <p className="cardDescripcion">Proteína de elevada calidad y es muy bien utilizada por el cuerpo.</p>
                    <a href="https://www.educacionit.com/" className="boton">Leer más</a>
                    <a href="https://www.educacionit.com/" className="comprar">Agregar al carrito</a>
            </div>
            </div>
        </section>
        <h2 className="tituloEcommerce">INDUMENTARIA</h2>
        <section className="fila"> 
            <div className="card">
            <img src={imag2} alt="Remera" />
            <div className="cardContenido">
                <h3 className="cardTitulo">Remera adidas $1500</h3>
                <p className="cardDescripcion">Remera para dama.</p>
                <a href="https://www.educacionit.com/" className="boton">Leer más</a>
                <a href="https://www.educacionit.com/" className="comprar">Agregar al carrito</a>
        </div>
        </div>
        <div className="card">
            <img src={imag1} alt="Zapatillas" />
            <div className="cardContenido">
                <h3 className="cardTitulo">Zzapatillas under armour $5500</h3>
                <p className="cardDescripcion">Zapatillas deportivas.</p>
                <a href="https://www.educacionit.com/" className="boton">Leer más</a>
                <a href="https://www.educacionit.com/" className="comprar">Agregar al carrito</a>
        </div>
        </div>
        <div className="card">
            <img src={imag2} alt="Remera" />
            <div className="cardContenido">
                <h3 className="cardTitulo">Remera adidas $1800</h3>
                <p className="cardDescripcion">Remera deportiva para hombre.</p>
                <a href="https://www.educacionit.com/" className="boton">Leer más</a>
                <a href="https://www.educacionit.com/" className="comprar">Agregar al carrito</a>
        </div>
        </div>
    </section>
    </main>
    );
}


export default Ecommerce;