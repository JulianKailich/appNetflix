import React, { useState } from 'react';
import { VerticalBar } from '../verticalbar/VerticalBar';
import { Results} from './Results';

export const Search = () => {



  const [inputValue, setInputValue] = useState("");
  const url = `https://api.themoviedb.org/3/search/movie?api_key=688ae98bf1c4a396903cf05ac4963908&query=${inputValue}`;


  const [filteredMovies, setFilteredMovies] = useState([]);

  const [inputError, setInputError] = useState(false);
  const [searchError, setSearchError] = useState(false);



  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };

  const resetInput = () => {
    setInputValue("");
  }

  const handleSubmit = async(e) => {

    e.preventDefault();
    resetInput();

    if (inputValue.length > 0){
      
        setInputError(false);
        await fetch(url)
        .then(resp => resp.json())
        .then(data => {
          if(data.results.length > 0){
            setFilteredMovies(data.results)
            setSearchError(false)
          } else {
            setSearchError(true)
            setFilteredMovies([])
          }
        });

    }  
    
    else {

      setInputError(true);

    }
   
}


  return (


    <div>
            <VerticalBar />

            <div className="searchScreen">

                <form className="searchForm" onSubmit={handleSubmit}>

                    <div className="inputForm">
                   
                      <input type="text" placeholder="Search any movie / tv show" onChange={handleInputChange} value={inputValue}/>
                      <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}></i>
                
                    </div>
                   
                </form>   
                {inputError &&
                         <div>
                            <p className="error">
                            Write something..
                          </p>
                        </div>
                }

            </div>  



            <div className="resultsScreen">


               

                {
                  
                filteredMovies.map((movie)=> (

                  movie.poster_path !== null &&
                  <Results movie={movie} key={movie.id} />

                ))

              }

              
              { searchError &&

                
                <div>

                  <p className="error">
                  Movies / Tv shows not found..
                  </p>

              </div>
              }
               
            </div>

    </div>
  )
}
