import React, { useState } from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import './SelectMenu.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'

export const SelectMenu = ({ sortAsc, sortDesc }) => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState('Sort name alphabetically')

  window.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id !== 'sort-button') {
      setOpen(false)
    }
  })

  const onSelect = () => {
    setOpen(!isOpen)
    if (!isOpen) {
      setCurrent('Sort name alphabetically')
    }
  }

  const sortAscending = () => {
    sortAsc()
    setCurrent('From A to Z')
    setOpen(false)
  }

  const sortDescending = () => {
    sortDesc()
    setCurrent('From Z to A')
    setOpen(false)
  }

  const optionsClass = className({
    [`select__options`]: true,
    [`select__options--open`]: isOpen,
  })

  return (
    <div className="select">
      <button
        id="sort-button"
        onClick={() => onSelect()}
        className="select__current"
        type="button"
      >
        {current}
      </button>
      <div className={optionsClass}>
        <button
          data-testid="sort-ascending"
          className="select__options__item"
          type="button"
          onClick={() => sortAscending()}
        >
          From A to Z
        </button>
        <button
          data-testid="sort-descending"
          className="select__options__item"
          type="button"
          onClick={() => sortDescending()}
        >
          From Z to A
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

SelectMenu.propTypes = {
  sortAsc: PropTypes.func.isRequired,
  sortDesc: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectMenu)
