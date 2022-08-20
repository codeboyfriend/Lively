import { useState } from "react";
import Comic from "./Comic";

const Comics = ({
    comic
}) => {
    const [showAll, setShowAll] = useState(false)

  return (
    <div className="trends">
        <div className="heading">
            <h3>Comic</h3>
            <p onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'}</p>
        </div>

        <section className="cards">
            {comic.slice(!showAll && (1, -5))
            .map((comicItem) => <Comic 
                key={comicItem.id} 
                comicItem={comicItem} />
            )}
        </section>
    </div>
  )
}

export default Comics