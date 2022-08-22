import Show from "../Show";
import Navbar from "../utils/Navbar";
import Populars from "../Populars";
import Trends from "../Trends";

const Shows = ({
    show,
    popular,
    trending
}) => {
  return (
    <div className="movies">
        <Navbar />
        
        <div className="heading">
            <h3>TV Shows</h3>
        </div>

        <section className="cards">
            {show
            .map((showItem) => <Show 
                key={showItem.id} 
                showItem={showItem} />
            )}
        </section>

        <Trends trending={trending} />

        <Populars popular={popular} />
    </div>
  )
}

export default Shows