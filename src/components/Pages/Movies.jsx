import { useState } from "react";
import Movie from "../Movie";
import Navbar from "../utils/Navbar";
import Populars from "../Populars";
import Trends from "../Trends";

const Movies = ({
    movie,
    popular,
    trending
}) => {
    const [showAll, setShowAll] = useState(false)

  return (
    <div className="movies">
        <Navbar />
        
        <div className="heading">
            <h3>Movies</h3>
            <p onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'}</p>
        </div>

        <section className="cards">
            {movie.slice(!showAll && (1, -10))
            .map((movieItem) => <Movie 
                key={movieItem.id} 
                movieItem={movieItem} />
            )}
        </section>

        <Trends trending={trending} />

        <Populars popular={popular} />
    </div>
  )
}

export default Movies