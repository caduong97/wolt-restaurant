import React, { useState } from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import './SelectMenu.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'

const SelectMenu = ({ sortAsc, sortDesc }) => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState('Sort')

  window.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id !== 'sort-button') {
      setOpen(false)
    }
  })

  const onSelect = () => {
    setOpen(!isOpen)
    if (!isOpen) {
      setCurrent('Sort')
    }
  }

  const sortAscending = () => {
    sortAsc()
    setCurrent('A to Z')
    setOpen(false)
  }

  const sortDescending = () => {
    sortDesc()
    setCurrent('Z to A')
    setOpen(false)
  }

  console.log('select render')

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
          className="select__options__item"
          type="button"
          onClick={() => sortAscending()}
        >
          A to Z
        </button>
        <button
          className="select__options__item"
          type="button"
          onClick={() => sortDescending()}
        >
          Z to A
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
  // restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortAsc: PropTypes.func.isRequired,
  sortDesc: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectMenu)
