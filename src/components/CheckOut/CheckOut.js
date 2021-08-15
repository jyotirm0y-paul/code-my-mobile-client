import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from './../../FakeData.json'

const CheckOut = () => {

  const params = useParams();
	const [checkout, setCheckout] = useState([]);
  console.log(params.id);
  
  useEffect(() => {
    setCheckout(fakeData)
  }, [])


  const selected = checkout.filter(x => x.id === params.id);

console.log( selected);
  return (
    <div className="text-center d-flex justify-content-center">
        <table className="table w-75">
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{selected[0]?.title}</td>
      <td>{selected?.length}</td>
      <td>{selected[0]?.price}</td>
    </tr>
    <button className="btn-primary float-end"><Link to={`/shipment/${selected[0]?.id}`} className="text-white" 
// onClick={handleName}
>CheckOut</Link></button>
  </tbody>

</table>


    </div>
  );
};

export default CheckOut;