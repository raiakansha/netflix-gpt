import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePolularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcommingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcommingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        main container
          -video bg
          .video title
        
        secondary container 
          -movie list*n
          -cards*n
      */}
    </div>
  );
};

export default Browse;
