import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Grid.scss'

const Grid = ({ colNum, children }) => {
  const gridClasses = classNames('grid', `grid--${colNum}`)
  return <div className={gridClasses}>{children}</div>
}

Grid.propTypes = {
  colNum: PropTypes.number.isRequired,
  children: PropTypes.elementType.isRequired,
}

export default Grid