import React from 'react'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className="search">
      <input
        id="search"
        className="search__input"
        type="text"
        placeholder="search..."
      />
    </div>
  )
}

export default SearchBar
