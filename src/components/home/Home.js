import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };


  return (


    <div className="home animate__animated animate__zoomIn animate__faster">

        <p className="title">
        Movies, unlimited <br />
        series and more.
        </p>

        <p className="subtitle">
        Enjoy and cancel whenever you want.
        </p>

        <button className="btn btn-danger" onClick={handleClick}>Start</button>
        
    </div>


  )
}
