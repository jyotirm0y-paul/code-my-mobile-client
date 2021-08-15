import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('https://quiet-oasis-56095.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  const specific = orders.filter((user => user.email === loggedInUser.email))
  console.log(specific);
  return (
    <div>
      <div class="card mt-50 mb-50 w-50 m-auto p-3">
        <div class="gap">
          <div class="col-2 d-flex mx-auto"> </div>
        </div>
        <div class="title mx-auto"> Thank you for your order! </div>
        <br />
        <div class="main">
          <div class="row row-main">
            <div class="col-12">
              <div class="row d-flex">
                {
                  specific.map(pd => (<p><b>{pd.product}</b></p>))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;