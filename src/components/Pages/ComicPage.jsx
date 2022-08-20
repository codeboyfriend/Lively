import Comic from "../Comic";
import Navbar from "../utils/Navbar";

const ComicPage = ({
    comic
}) => {
  return (
    <div className="trends" style={{
      marginTop: '80px'
    }}>
      <Navbar />
      <div className="heading">
          <h3>Favorites</h3>
      </div>

      <section className="cards">
          {comic.map((comicItem) => <Comic 
              key={comicItem.id} 
              comicItem={comicItem} />
          )}
      </section>
    </div>
  )
}

export default ComicPage