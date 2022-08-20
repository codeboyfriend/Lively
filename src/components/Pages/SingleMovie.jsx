import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Navbar from "../utils/Navbar";
import Populars from "../Populars";
import Trends from "../Trends";

const SingleMovie = ({ 
    popular,
    trending 
}) => {
    const movieId = window.location.pathname.split("/")[2];
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setMovie(data))
        setIsLoading(false)
    }
    
  
    useEffect(() => {
        fetchMovie()
    }, [])

  return isLoading ? (<h1>Loading</h1>) : (
    <div className="single_card">
        <Navbar />
        <div className="card_back">
            <div className="cover-grad"></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />

            <div className="content">
                <div>
                    <h2>{movie.title}</h2>
                    <p className='date'>{movie.release_date}</p>
                </div>
                <div>
                <p>{movie.runtime}mins</p>
                </div>
            </div>
        </div>

        <div className="text_content">
            {movie.overview}

            <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
        </div>

        <Populars popular={popular} />
        
        <Trends trending={trending} />

        <h1 className="other_title">You might also like</h1>

        <div className="other_cards">
            {
                popular.slice(1, 6).map((other) => (
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w200/${other.poster_path}`} alt="" />

                        <div className="content">
                            <div>
                                <h2>{other.title}</h2>
                                <p className='date'>{other.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className="other_cards">
            {
                trending.slice(1, 6).map((other) => (
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w200/${other.poster_path}`} alt="" />

                        <div className="content">
                            <div>
                                <h2>{other.title}</h2>
                                <p className='date'>{other.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SingleMovie