import React, { useState } from 'react'
import className from 'classnames'
import './SelectMenu.scss'

const SelectMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState('Sort')

  window.addEventListener('click', e => {
    // console.log(e.target.id)
    if (e.target.id !== 'example') {
      setOpen(false)
    }
  })

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

export default SelectMenu
