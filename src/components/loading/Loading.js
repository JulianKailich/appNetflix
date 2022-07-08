import { BarLoader } from 'react-spinners';
import '../styles.css';

import React from 'react'

export const Loading = () => {
  return (
    <div className="loadingscreen">
        <img src="././assets/netflixlogosmall.png" alt="loadingImg"></img>
  
    <BarLoader
        color="#fa0a0a"
        height={10}
        loading
        speedMultiplier={0.5}
        width={200}
      />
      </div>
  )
}
