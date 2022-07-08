import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/movies")
  };


  return (

      <div className="login-container animate__animated animate__fadeInLeft">

        <div className="mynew-form">

          <div className="side-image">
            <p>NETFLIX <br />
               ACCOUNT <br />
               LOGIN</p>
          </div>


          <div className="side-form">
            <form className="myform" onSubmit={handleSubmit}>
              <h3>Login</h3>
              <p>Prepare the popcorn</p>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="btn btn-dark">Let's go</button>
            </form>
          </div>

        </div>

      </div>


  )
}
