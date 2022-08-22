import { Link } from 'react-router-dom';

const Show = ({
  showItem
}) => {
  return (
    <Link to={`/showItem/${showItem.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200/${showItem.poster_path}`} alt="" />

      <div className="content">
        <div>
          <h2>{showItem.title}</h2>
          <p className='date'>{showItem.release_date}</p>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default Show