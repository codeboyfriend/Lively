import { Link } from 'react-router-dom';

const Trend = ({
  trend
}) => {
  return (
    <Link to={`/trend/${trend.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200/${trend.poster_path}`} alt="" />

      <div className="content">
        <div>
          <h2>{trend.title}</h2>
          <p className='date'>{trend.release_date}</p>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default Trend