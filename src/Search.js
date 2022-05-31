import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Search.css';

function Search() {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const search = (searchQuery) => {

    if (!query)
    {
      alert("Query can't be empty!")
    }

    else if (query.length < 3) {
      alert("Query can't be less than three characters!")
    }

    else {
      history.push("/search/" + query)
    }
    
  }; 

  return (
    <form>
        <input id="search-query" className="search-query" type="text" value={query} onChange={(searchQuery) => setQuery(searchQuery.target.value)}/>
        <input className="search-submit" type="submit" value="SEARCH" onClick={search}/>
    </form>
  );
}

export default Search;
