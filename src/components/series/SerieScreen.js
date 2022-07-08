import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SerieCard } from './SerieCard';
import '../styles.css';





export const SerieScreen = ({url}) => {

    const newUrl = url;
    const [series, setSeries] = useState([]);

    useEffect(() => {
     
        fetch(newUrl)
        .then(resp => resp.json())
        .then(data => setSeries(data.results))

    }, [newUrl]);


    const [width, setWidth] = useState(0);
    const sliderContainer = useRef();
    

    useEffect(() => {
      
      setWidth(sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth);

    }, [series]);
    


  return (
    <div>
        <motion.div ref={sliderContainer} className="sliderContainer" whileTap={{cursor: "grabbing"}}>
        <motion.div className="inner-slider" drag="x" dragConstraints={{right:0, left: -width}}  > 
    
        {series.map((serie) => (
           <motion.div key={serie.id}>
            <SerieCard serie={serie} key={serie.id}/>
            {/* ARMAR MOVIECARDSCREEN CON VOTE RATE VOTE COUNT TITLE/NAME RELEASE DATE OVERVIEW */}
            </motion.div>
        ))}
        </motion.div>
    
    </motion.div>
    </div>
  )
}
