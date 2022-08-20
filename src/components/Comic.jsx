import { Link } from 'react-router-dom';

const Comic = ({
  comicItem
}) => {
  return (
    <Link to={`/comicItem/${comicItem.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w200/${comicItem.poster_path}`} alt="" />

      <div className="content">
        <div>
          <h2>{comicItem.title}</h2>
          <p className='date'>{comicItem.release_date}</p>
        </div>
        </div>
      </div>
    </Link>
  )
}

export default Comic