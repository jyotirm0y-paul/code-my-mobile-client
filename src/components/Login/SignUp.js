// import React from 'react';
// import { Link } from 'react-router-dom';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../../firebase.config';

// firebase.initializeApp(firebaseConfig);

// const SignUp = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleClick= () => {
//     firebase.auth()
//   .signInWithPopup(provider)
//   }
//   return (
//     <div className="container mt-5">
//       <div className="row mt-5">
//         <div className="col-md-12">
//           <button onClick={handleClick} className="btn btn-lg btn-google btn-block text-uppercase btn-outline-primary" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Signup Using Google</button>
//         </div>
//       </div>
//       <br />
//       <p class="text-inverse text-center">Already have an account?
//         <Link to="/signIn">Login</Link>
//       </p>
//     </div>

//   );
// };

// export default SignUp;