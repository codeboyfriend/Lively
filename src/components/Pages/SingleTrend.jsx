import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Navbar from "../utils/Navbar";
import Populars from "../Populars";

const SingleTrend = ({ popular }) => {
    const trendId = window.location.pathname.split("/")[2];
    const [trend, setTrend] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchTrend = () => {
        fetch(`https://api.themoviedb.org/3/movie/${trendId}?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setTrend(data))
        setIsLoading(false)
    }
    
  
    useEffect(() => {
        fetchTrend()
    }, [])

  return isLoading ? (<h1>Loading</h1>) : (
    <div className="single_card">
        <Navbar />
        <div className="card_back">
            <div className="cover-grad"></div>
            <img src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path}`} alt="" />

            <div className="content">
                <div>
                    <h2>{trend.title}</h2>
                    <p className='date'>{trend.release_date}</p>
                </div>
                <div>
                <p>{popular.runtime}mins</p>
                </div>
            </div>
        </div>

        <div className="text_content">
            {trend.overview}

            <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
        </div>

        <Populars popular={popular} />

        <h1 className="other_title">You might also like</h1>

        <div className="other_cards">
            {
                popular.slice(1, 11).map((other) => (
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