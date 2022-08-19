import { useState } from "react";
import Popular from "./Popular";

const Populars = ({
    popular
}) => {
    const [showAll, setShowAll] = useState(false)

  return (
    <div className="trends">
        <div className="heading">
            <h3>Popular Movies</h3>
            <p onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'}</p>
        </div>

        <section className="cards">
            {popular.slice(!showAll && (1, -5))
            .map((popularItem) => <Popular 
                key={popularItem.id} 
                popularItem={popularItem} />
            )}
        </section>
    </div>
  )
}

export default Populars