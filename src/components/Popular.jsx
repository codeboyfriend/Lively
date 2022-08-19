import { Link } from 'react-router-dom';

const Popular = ({
  popularItem
}) => {
  return (
    <Link to={`/popularItem/${popularItem.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200/${popularItem.poster_path}`} alt="" />

      <div className="content">
        <div>
          <h2>{popularItem.title}</h2>
          <p className='date'>{popularItem.release_date}</p>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default Popular