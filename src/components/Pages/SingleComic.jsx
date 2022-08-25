import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Navbar from "../utils/Navbar";
import Populars from "../Populars";
import Trends from "../Trends";

const SingleTrend = ({ 
    popular,
    trending 
}) => {
    const comicId = window.location.pathname.split("/")[2];
    const [comic, setComic] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetComic = () => {
        fetch(`https://api.themoviedb.org/3/movie/${comicId}?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setComic(data))
        setIsLoading(false)
    }
    
  
    useEffect(() => {
        fetComic()
    }, [])

  return isLoading ? (
    <div className="loading">
      <div className="content">
        <p className="load_logo">L</p>
        <h1>Lively</h1>
        <p>Find movies that bring your mood back.</p>
      </div>
    </div>
    ) : (
    <div className="single_card">
        <Navbar />
        <div className="card_back">
            <div className="cover-grad"></div>
            <img src={`https://image.tmdb.org/t/p/original/${comic.backdrop_path}`} alt="" />

            <div className="content">
                <div>
                    <h2>{comic.title}</h2>
                    <p className='date'>{comic.release_date}</p>
                </div>
                <div>
                <p>{comic.runtime}mins</p>
                </div>
            </div>
        </div>

        <div className="text_content">
            {comic.overview}

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

export default SingleTrend