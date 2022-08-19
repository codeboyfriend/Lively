import Navbar from "../utils/Navbar";
import Movies from "../Movies";

const MoviesPage = ({ movie }) => {
  return (
    <div className="movie_page">
      <Navbar />
      <Movies movie={movie} />
    </div>
  )
}

export default MoviesPage