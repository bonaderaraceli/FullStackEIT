import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imag1 from '../image/enargy.webp';


const Carrito = () => {

    const [carrito, setCarrito] = useState({});
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {

        const producto = JSON.parse(localStorage.getItem('producto'));

        if (!producto) {
            alert('No hay productos en el carrito');
            navigate('/ecommerce');
        }
        else {
            setUser(window.sessionStorage.getItem('user'));
            setCarrito(producto);
        }
    },[navigate]);

    const eliminarDatos = () => {
        localStorage.removeItem('producto');
        /* localStorage.clear(); borra TODO el localstorage */
        navigate('/ecommerce');
    };

    return (
        <div className="container text-center">
            <h1>Carrito de {user}</h1>
            <div className="card">
                <img src={imag1} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{carrito.nombre}</h5>
                        <p className="card-text">{carrito.descripcion}</p>
                        <p className="card-text">Precio: ${carrito.precio}</p>
                        <button onClick={eliminarDatos} className="btn btn-primary">Comprar</button>
                    </div>
            </div>
        </div>
    );
};


export default Carrito;