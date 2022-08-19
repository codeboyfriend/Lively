import { Link } from 'react-router-dom';

const Movie = ({
  movieItem
}) => {
  return (
    <Link to={`/movieItem/${movieItem.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`} alt="" />

      <div className="content">
        <div>
          <h2>{movieItem.title}</h2>
          <p className='date'>{movieItem.release_date}</p>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default Movie