import Navbar from "../utils/Navbar";
import Trends from "../Trends";
import Populars from "../Populars";
import Comics from "../Comics";

const Home = ({
    popular,
    trending,
    comic,
    isLoading
}) => {
  return isLoading ? (
    <div className="loading">
      <div className="content">
        <p className="load_logo">L</p>
        <h1>Lively</h1>
        <p>Find movies that bring your mood back.</p>
      </div>
    </div>
  ) : (
    <div className="home">
      <Navbar />
      <Trends trending={trending} />
      <Populars popular={popular} />
      <Comics comic={comic} />
    </div>
  )
}

export default Home