import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loading } from '../loading/Loading';
import { VerticalBar } from '../verticalbar/VerticalBar'

export const Profile = () => {



    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      
      setTimeout(()=> {
        setLoading(false);
      },2000);

    }, []);

    const handleExit = () => {
        navigate('/home');
    }

    const handleChangeColor = (e) => {
        
        const newDiv = document.getElementById('newDiv');

        switch (e.target.classList.value) {

            case 'redColorBtn':
                newDiv.style.backgroundColor = "red";
                break;

                case 'blueColorBtn':
                newDiv.style.backgroundColor = "blue";
                break;

                case 'greenColorBtn':
                newDiv.style.backgroundColor = "green";
                break;

                case 'yellowColorBtn':
                newDiv.style.backgroundColor = "yellow";
                break;

                case 'whiteColorBtn':
                newDiv.style.backgroundColor = "white";
                break;
            
            default: 
            return;

        }
    }





  return (  

    <div>

        {
            loading ?

            <Loading />

            :

            <div>

                <VerticalBar />

                <div className="profile-container">

                    <div className="profileScreen animate__animated animate__fadeInRight"> 

                        
        
                        <h2> Julian </h2>
    
                        <p> Select your favorite avatar color </p>

                        <div className="avatarSquad" id='newDiv'>
                            <img src ="/assets/smile.png"></img>
                        </div>

                        <div className="squadsContainer" id='fkkDiv'>
                            <button className="redColorBtn" onClick={handleChangeColor}></button>
                            <button className="blueColorBtn" onClick={handleChangeColor}></button>
                            <button className="yellowColorBtn" onClick={handleChangeColor}></button>
                            <button className="greenColorBtn" onClick={handleChangeColor}></button>
                            <button className="whiteColorBtn" onClick={handleChangeColor}></button>
                        </div>

                        <button className="btn btn-danger" onClick={handleExit}>Logout</button>

                    </div>

                </div>

            </div>
        }

    </div>

  )
}
