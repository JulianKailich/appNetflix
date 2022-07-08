
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { BannerCardScreen } from "../components/banner/BannerCardScreen";
import { BannerSerieScreen } from "../components/banner/BannerSerieScreen";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { MovieCardScreen } from "../components/movies/MovieCardScreen";
import { Movies } from "../components/movies/Movies";
import { Profile } from "../components/profile/Profile";
import { Search } from "../components/search/Search";
import { SerieCardScreen } from "../components/series/SerieCardScreen";
import { Series } from "../components/series/Series";
import { YoutubeMovieScreen } from "../components/youtube/YoutubeMovieScreen";
import { YoutubeSerieScreen } from "../components/youtube/YoutubeSerieScreen";
/* import { Sidebar } from "../components/sidebar/Sidebar"; */

export const AppRouter = () => {
  return (


    <div>

 {/*    <Sidebar>
        <Routes>

            <Route path="/" element={<Sidebar />} />

        </Routes>
    </Sidebar> */}

    <BrowserRouter>
        <Routes>
      
            <Route path="/home" element={<Home />} />
        
            <Route path="/login" element={<Login />} />
            
            <Route path="/movies" element={<Movies />} />
            
            <Route path="/series" element={<Series />} />

            <Route path="/moviedetails/:release_date/:title/:popularity/:vote_count/:poster_path/:vote_average" element={<MovieCardScreen />} />

            <Route path="/seriedetails/:first_air_date/:name/:popularity/:vote_count/:poster_path/:vote_average" element={<SerieCardScreen />} />

            <Route path="/bannerdetails/:release_date/:title/:overview/:vote_average/:backdrop_path" element={<BannerCardScreen />} />

            <Route path="/bannerseriedetails/:first_air_date/:name/:overview/:vote_average/:poster_path" element={<BannerSerieScreen />} />
            
            <Route path="/youtubemovietrailer/:title" element={<YoutubeMovieScreen />} />

            <Route path="/youtubeserietrailer/:name" element={<YoutubeSerieScreen />} />

            <Route path="/profile" element={<Profile />} />
            
            <Route path="/search" element={<Search />} />

            <Route path="*" element={<Home />} />

        </Routes>
  </BrowserRouter>

  </div>


  )
};
