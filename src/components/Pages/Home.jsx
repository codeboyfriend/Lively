import Navbar from "../utils/Navbar";
import Trends from "../Trends";
import Populars from "../Populars";

const Home = ({
    popular,
    trending,
    isLoading
}) => {
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
      <Trends trending={trending} />
      <Populars popular={popular} />
    </div>
  )
}

export default Home