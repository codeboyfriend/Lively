import { useState , useEffect } from 'react';
import Navbar from '../utils/Navbar';
import SearchItems from '../SearchItems';

const Search = () => {
    const text = window.location.pathname.split("/")[2];
    const [filterItems, setFilterItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSearchItem = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setFilterItems(data.results))
        setIsLoading(false)
    }

    useEffect(() => {
      fetchSearchItem()
    }, [])

  return isLoading ? (
    <div className="loading">
      <div className="content">
        <h1>Lively</h1>
        <p>Find movies that bring your mood back.</p>
      </div>
    </div>
  ) : (
    <div className="home">
      <Navbar />
      <SearchItems filterItems={filterItems} />
    </div>
  )
}

export default Search