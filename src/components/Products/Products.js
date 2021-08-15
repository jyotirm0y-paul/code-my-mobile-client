import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from './../../FakeData';

const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(fakeData)
  }, [products])

  return (
    <div className="container">
      <Link to="/orders" className="btn btn-primary p-2 m-2">your product</Link>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
        {
          products.map((product, key) =>
            <Product key={key} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;