import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory } from "react-router-dom"
import { UserContext } from '../../App';
import './SignIn.css'

firebase.initializeApp(firebaseConfig);

const SignIn = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const [user, setUser] = useState(null);
  const [inputData, setInputData] = useState({});

  const provider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegisterSubmit = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(inputData.email, inputData.password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    history.push("/products")
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(inputData.email, inputData.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    history.push("/products")
  }

  return (
    <div className="container1">
      <div class="login-page">
        <div class="form">
          {(user === null) && (<form class="register-form" onSubmit={handleRegisterSubmit}>
            <input name="email" onChange={handleChange} type="email" placeholder="email address" />
            <input name="password" onChange={handleChange} type="password" placeholder="password" />
            <button>create</button>
            <p class="message">Already registered? <a href onClick={() => setUser("createUser")}>Sign In</a></p>
          </form>)}
          {
            (user === "createUser") &&
            (<form class="login-form" onSubmit={handleLoginSubmit}>
              <input name="email" onChange={handleChange} type="email" placeholder="email" />
              <input name="password" onChange={handleChange} type="password" placeholder="password" />
              <button>login</button>
              <p class="message">Not registered? <a href onClick={() => setUser(null)}>Create an account</a></p>
            </form>)}
        </div>
      </div>
    </div>
  );
};

export default SignIn;