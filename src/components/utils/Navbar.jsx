import { Link } from 'react-router-dom';
import { 
  FaTimes, 
  FaSearch,
  FaHome,
  FaTv 
} from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const submitSearch = () => {
    navigate(`/search/${text}`)
    setText('')
  }

  return (
    <div className="navbar">
      <div className="logo"><Link to={'/'}>Lively</Link></div>
            
      <div className="links">
        <Link to="/movies">Movies</Link>
        <Link to="/shows">TV Shows</Link>
        <Link to="/comics">Comics</Link>
      </div>

      <div className="icons">
        {showSearch ? 
          <FaTimes className='icon' onClick={() => setShowSearch(!showSearch)} /> : 
          <FaSearch className='icon' onClick={() => setShowSearch(!showSearch)} 
        />}
      </div>

      <div className={showSearch ? 'search_form active' : 'search_form'}>
        <input 
          value={text}
          type="search" 
          placeholder='Search here...'
          onChange={(e) => setText(e.target.value)} 
        />
        <FaSearch onClick={() => submitSearch()} className='icon' />
      </div>

      <div className="mobile_nav">
        <div>
          <Link to="/"><FaHome /></Link>
        </div>
        <div>
          <Link to="/movies"><BiMoviePlay /></Link>
        </div>
        <div>
          <Link to="/shows"><FaTv /></Link>
        </div>
        <div>
          <Link to="/comics"><GiAmericanFootballPlayer /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar