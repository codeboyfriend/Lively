import { useState } from "react";
import Trend from "./Trend";

const Trends = ({
    trending
}) => {
    const [showAll, setShowAll] = useState(false)
    
  return (
    <div className="trends">
        <div className="heading">
            <h3>Trending</h3>
            <p onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'}</p>
        </div>

        <section className="cards">
            {trending.slice(!showAll && (1, -5))
            .map((trend) => <Trend 
                key={trend.id} 
                trend={trend} />
            )}
        </section>
    </div>
  )
}

export default Trends