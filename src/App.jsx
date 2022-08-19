import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/style.css';
import Home from './components/Pages/Home';
import Movies from './components/Pages/MoviesPage';
import SingleTrend from './components/Pages/SingleTrend';
import SinglePopular from './components/Pages/SinglePopular';
import Search from './components/Pages/Search';
import SingleSearch from './components/Pages/SingleSearch';

function App() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [comic, setComic] = useState([]);
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPopular = async () => {
    const result = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=a42de693a0209f00fe39aa60310b04b9&language=en-US&page=1`)

    setPopular(result.data.results)
    // setIsLoading(false)
  }

  const getTrend = async () => {
    const result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=a42de693a0209f00fe39aa60310b04b9`)

    setTrending(result.data.results)
    setIsLoading(false)
  }

  const getComic = async () => {
    const result = await axios(`https://api.themoviedb.org/3/list/1?api_key=a42de693a0209f00fe39aa60310b04b9&language=en-US`)

    setComic(result.data.items)
    setIsLoading(false)
  }

  const getMovie = async () => {
    const result = await axios(`https://api.themoviedb.org/3/list/10?api_key=a42de693a0209f00fe39aa60310b04b9&language=en-US`)

    setMovie(result.data.items)
    setIsLoading(false)
  }

  useEffect(() => {
    getPopular();
    getTrend();
    getComic();
    getMovie();
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home 
            popular={popular}
            trending={trending}
            isLoading={isLoading} 
          />} />

          <Route path='/trend/:trendId' element={<SingleTrend 
            popular={popular}
          />} />

          <Route path='/popularItem/:popularId' element={<SinglePopular 
            trending={trending}
          />} />

          <Route path='/search/:text' element={<Search />} />

          <Route path='/movies' element={<Movies 
            movie={movie}
          />} />

          <Route path='/filterItem/:itemId' element={<SingleSearch
            movie={movie}
            trending={trending}
          />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
