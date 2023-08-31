import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductoContext } from '../context/productosContext.js';

function CardProducto() {
    const { products } = useContext(ProductoContext);

    return (
        <div className="product" style={{ paddingTop: "100px" }}>
            {products.map((producto) => (
                <div className="product_container" style={{ paddingBottom: "50px" }} key={producto.id}>
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
    );
}

export default CardProducto;
