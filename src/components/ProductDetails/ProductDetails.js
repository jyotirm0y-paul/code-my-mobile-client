import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from './../../FakeData.json'

const ProductDetails = () => {
  const params = useParams();
  const [productDs, setProductDs] = useState([]);

  useEffect(() => {
    setProductDs(fakeData)
  }, [])


  const pd = productDs.find(x => x.id === params.id);

  return (
    <div className="container">
      <div className="row border border-primary m-3">
        <div className="col-6">
          <h3>{pd?.title}</h3>
          <img className="w-50" src={pd?.image} alt="" />
          <div className="row">
            <div className="col-6"><h2>{pd?.category}</h2></div>
            <div className="col-6"><h2>Price: ${pd?.price}</h2></div>
            <Link to={`/checkout/${pd?.id}`}><button className="btn btn-primary">Checkout</button></Link>
          </div>
        </div>
        <div className="col-6">
          <h3>{pd?.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;