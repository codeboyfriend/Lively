import { useState } from "react";
import SearchItem from "./SearchItem";

const SearchItems = ({
    filterItems
}) => {
    
  return (
    <div className="trends">
        <div className="heading">
            <h3>Results</h3>
        </div>

        <section className="cards">
            {filterItems.map((filterItem) => <SearchItem 
                key={filterItem.id} 
                filterItem={filterItem} />
            )}
        </section>
    </div>
  )
}

export default SearchItems