import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import productosContext from '../context/productosContext.js';

function CardProducto() {
    const {myContextProductos} = useContext(productosContext);
    console.log(myContextProductos);
    return (
        <>
            <div className="product" style={{ paddingTop: "100px" }}>
                {myContextProductos.map((producto) => (
                    <div className="product_container" style={{ paddingBottom: "50px" }}>
                        <div className="item">
                            <div className="item_img">
                                <img src={producto.images[0]} alt="..." />
                            </div>
                            <div className="item_content">
                                <h3>CELEBRATE WITH FAMILY &amp; FRIENDS</h3>
                                <h3>{producto.title}</h3>
                                <p>{producto.description}</p>
                                <br /><br /><br />
                                <Link to="/catering">VENUS AND SPACES</Link>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </>
    );
}

export default CardProducto;
