import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import fakeData from './../../FakeData.json'

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const params = useParams();
  const history = useHistory();
  const [checkout, setCheckout] = useState([]);

  useEffect(() => {
    setCheckout(fakeData)
  }, []);

  const selected = checkout.find(x => x.id === params.id);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
    history.push('/products')
  }

  return (
    <div className="container1">
      <div class="login-page">
        <div class="form">

          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={loggedInUser?.displayName} {...register("name", { required: true })} placeholder="name" /> <br />
            <input defaultValue={loggedInUser?.email} {...register("email")} readOnly="readonly" /><br />
            <input defaultValue={selected?.title} {...register("product", { required: true })} readOnly="readonly" /><br />

            <input {...register("address", { required: true })} placeholder="address" /><br />
            <input type="number" {...register("phone", { required: true })} placeholder="phone number" /><br />

            {errors.exampleRequired && <span>This field is required</span>}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;