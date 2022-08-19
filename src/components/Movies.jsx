import { useState } from "react";
import Movie from "./Movie";

const Movies = ({
    movie
}) => {
    const [showAll, setShowAll] = useState(false)
  return (
    <div className="movies">
        <div className="heading">
            <h3>Movies</h3>
            <p onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'}</p>
        </div>

        <section className="cards">
            {movie.slice(!showAll && (1, -5))
            .map((movieItem) => <Movie 
                key={movieItem.id} 
                movieItem={movieItem} />
            )}
        </section>
    </div>
  )
}

export default Movies