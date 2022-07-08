import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';


export const VerticalBar = () => {

  
  


  return (
    <div>
        <div className="verticalBar">

            <Link to={"/search"}> <i className="fa-solid fa-magnifying-glass"></i> </Link>

            <Link to={"/home"}> <i className="fa-solid fa-house"  ></i> </Link>

            <Link to={"/movies"}> <i className="fa-solid fa-clapperboard"></i> </Link>

            <Link to={"/series"}> <i className="fa-solid fa-tv"></i> </Link>

            <Link to={"/profile"}> <i className="fa-solid fa-face-grin"></i> </Link>

        </div>


    </div>
  )
}
