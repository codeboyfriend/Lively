import { Link } from 'react-router-dom';

const SearchItem = ({
  filterItem
}) => {
  return (
    <Link to={`/filterItem/${filterItem.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200/${filterItem.poster_path}`} alt="" />

      <div className="content">
        <div>
          <h2>{filterItem.title}</h2>
          <p className='date'>{filterItem.release_date}</p>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default SearchItem