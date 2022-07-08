import React, { useEffect, useRef, useState } from 'react';
import { MovieCard } from './MovieCard';
import { motion } from 'framer-motion';
import '../styles.css';






export const MovieScreen = ({baseUrl, fetchUrl}) => {

    
    const url = `${baseUrl}${fetchUrl}`
    const [movies, setMovies] = useState([]);



    useEffect(() => {

        fetch(url)
        .then(resp => resp.json())
        .then(data => setMovies(data.results));

    }, [url])
    
   
    
    const [width, setWidth] = useState(0);
    const sliderContainer = useRef();
    

    useEffect(() => {

        setWidth(sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth);
  
    }, [movies]);
    

  return (

    <div>
    
         
         <motion.div ref={sliderContainer} className="sliderContainer" whileTap={{cursor: "grabbing"}}>
            
            <motion.div className="inner-slider" drag="x" dragConstraints={{right:0, left: -width}}  > 
      
                {movies.map((movie) => (

                    <motion.div key={movie.id}>

                        <MovieCard movie={movie} key={movie.id}/>
    
                    </motion.div>

                ))} 

            </motion.div>
      
        </motion.div>

   
      
      
    </div>

    

  )
}
