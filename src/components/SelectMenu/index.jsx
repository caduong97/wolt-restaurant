import React, { useState } from 'react'
import className from 'classnames'
// import PropTypes from 'prop-types'
import './SelectMenu.scss'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as actions from '../../redux/actions/actions'

const SelectMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState('Sort')

  // window.addEventListener('click', e => {
  //   // console.log(e.target.id)
  //   e.preventDefault()
  //   console.log('random click')
  //   // if (e.target.id !== 'example') {
  //   //   setOpen(false)
  //   // }
  // })
  // console.log(current)

  const closeSelect = () => {
    setOpen(!isOpen)
    if (!isOpen) {
      setCurrent('Sort')
    }
  }

  const onSelect = value => {
    setCurrent(value)
    setOpen(false)
  }

  // const sortAscending = value => {
  //   sortAsc()
  //   setCurrent(value)
  // }

  const optionsClass = className({
    [`select__options`]: true,
    [`select__options--open`]: isOpen,
  })

  return (
    <div className="select">
      <button
        id="example"
        onClick={() => closeSelect()}
        className="select__current"
        type="button"
      >
        {current}
      </button>
      <div className={optionsClass}>
        <button
          className="select__options__item"
          type="button"
          onClick={() => onSelect('A to Z')}
        >
          A to Z
        </button>
        <button
          className="select__options__item"
          type="button"
          onClick={() => onSelect('Z to A')}
        >
          Z to A
        </button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     restaurants: state.restaurants,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch)
// }

// SelectMenu.propTypes = {
//   restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
//   sortAsc: PropTypes.func.isRequired,
// }

export default SelectMenu
