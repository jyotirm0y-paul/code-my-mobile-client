import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  // console.log(product);
  return (

    <div className="col">
      <div style={{ width: '80%', display: 'inherit' }} className="card m-auto">
        <Link to={`/product/${product.id}`}>
        <img style={{ width: '200px', height: '200px' }} src={product.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body" style={{ height: '150px' }}>
          <h5 className="card-title">{product.title}</h5>
        
          <div className="row">
            <div className="col-6">
              <p className="card-text">Price - {product.price}</p>
            </div>
            <div className="col-6">
            <Link to={`/checkout/${product.id}`}><button className="btn btn-primary">Checkout</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;