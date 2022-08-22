import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/style.css';
import Home from './components/Pages/Home';
import Movies from './components/Pages/Movies';
import Shows from './components/Pages/Shows';
import ComicPage from './components/Pages/ComicPage';
import SingleTrend from './components/Pages/SingleTrend';
import SinglePopular from './components/Pages/SinglePopular';
import SingleComic from './components/Pages/SingleComic';
import SingleMovie from './components/Pages/SingleMovie';
import SingleShow from './components/Pages/SingleShow'; 
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
    const result = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=2`)

    setPopular(result.data.results)
    setIsLoading(false)
  }

  const getTrend = async () => {
    const result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_APP_API_KEY}`)

    setTrending(result.data.results)
    setIsLoading(false)
  }

  const getComic = async () => {
    const result = await axios(`https://api.themoviedb.org/3/list/1?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`)

    setComic(result.data.items)
    setIsLoading(false)
  }

  const getMovie = async () => {
    const result = await axios(`https://api.themoviedb.org/3/list/10?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`)

    setMovie(result.data.items)
    setIsLoading(false)
  }

  const getShow = async () => {
    const result = await axios (`https://api.themoviedb.org/3/list/5?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`)
    
    setShow(result.data.items)
    setIsLoading(false)
  }

  useEffect(() => {
    getPopular();
    getTrend();
    getComic();
    getMovie();
    getShow();
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home 
            popular={popular}
            trending={trending}
            comic={comic}
            isLoading={isLoading} 
          />} />

          <Route path='/trend/:trendId' element={<SingleTrend 
            popular={popular}
            comic={comic}
          />} />

          <Route path='/popularItem/:popularId' element={<SinglePopular 
            trending={trending}
            comic={comic}
          />} />

          <Route path='/comicItem/:popularId' element={<SingleComic 
            trending={trending}
            popular={popular}
          />}/>

          <Route path='/movieItem/:movieId' element={<SingleMovie 
            trending={trending}
            popular={popular}
          />} />

          <Route path='/showItem/:showId' element={<SingleShow
            trending={trending}
            popular={popular}
          />} />

          <Route path='/search/:text' element={<Search />} />

          <Route path='/movies' element={<Movies 
            movie={movie}
            popular={popular}
            trending={trending}
          />} />

          <Route path='/shows' element={<Shows 
            show={show}
            popular={popular}
            trending={trending}
          />} />

          <Route path='/comics' element={<ComicPage 
            comic={comic}
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
