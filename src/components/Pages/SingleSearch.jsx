import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Navbar from "../utils/Navbar";
import Trends from "../Trends";

const SingleSearch = ({ movie, trending }) => {
    const filterId = window.location.pathname.split("/")[2];
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchPopular = () => {
        fetch(`https://api.themoviedb.org/3/movie/${filterId}?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setItem(data))
        setIsLoading(false)
    }
  
    useEffect(() => {
        fetchPopular()
    }, [])

    return isLoading ? (
        <div className="loading">
        <div className="content">
          <p className="load_logo">L</p>
          <h1>Lively</h1>
          <p>Find movies that bring your mood back.</p>
        </div>
      </div>) : (
        <div className="single_card">
            <Navbar />
            <div className="card_back">
                <div className="cover-grad"></div>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
    
                <div className="content">
                    <div>
                        <h2>{item.title}</h2>
                        <p className='date'>{item.release_date}</p>
                    </div>
                    <div>
                        <p>{item.runtime}mins</p>
                    </div>
                </div>
            </div>
    
            <div className="text_content">
                {item.overview}
    
                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>
            </div>
    
            <Trends trending={trending}  />
    
            <h1 className="other_title">You might also like</h1>
            <div className="other_cards">
                {
                    movie.slice(1, 11).map((other) => (
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

export default SingleSearch