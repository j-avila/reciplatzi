import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Dropdown, SearchWrapp } from "./Searchbar.styles"

const FilterDrop = ({ filterHandler, state }) => {
  const [open, setopen] = useState()

  const handleClick = (val) => {
    filterHandler({ ...state, type: val })
    setopen(false)
  }

  return (
    <Dropdown>
      <i className="fa-solid fa-filter" onClick={() => setopen(!open)} />
      {open && (
        <div className="filter-drop">
          <p>Filter by: </p>
          <ul>
            <li onClick={() => handleClick("s")}>All</li>
            <li onClick={() => handleClick("c")}>Category</li>
            <li onClick={() => handleClick("i")}>Ingredients</li>
          </ul>
        </div>
      )}
    </Dropdown>
  )
}

const Searchbar = ({ searchHandler }) => {
  const initialState = {
    queryString: "",
    type: "",
  }
  const [query, setQuery] = useState(initialState)

  useEffect(() => {
    if (query.queryString?.length > 3) {
      const newQuery = { ...query, type: query.type == "" ? "s" : query.type }
      searchHandler(newQuery)
    } else {
      searchHandler(initialState)
    }
  }, [query])

  return (
    <SearchWrapp>
      <section>
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="What do you want to cook today?"
          value={query.queryString}
          onChange={({ target }) =>
            setQuery({ ...query, queryString: target.value })
          }
        />
        {query.queryString?.length > 3 && (
          <i className="fas fa-close" onClick={() => setQuery(initialState)} />
        )}
      </section>
      <FilterDrop filterHandler={setQuery} state={query} />
    </SearchWrapp>
  )
}

Searchbar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
}

export default Searchbar
