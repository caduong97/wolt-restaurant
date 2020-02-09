import React, { useRef } from 'react'
import './SearchBar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  const inputRef = useRef(null)

  return (
    <label htmlFor="search" className="search">
      <FontAwesomeIcon icon={faSearch} />
      <input
        id="search"
        className="search__input"
        type="text"
        placeholder="search..."
        ref={inputRef}
      />
    </label>
  )
}

export default SearchBar
