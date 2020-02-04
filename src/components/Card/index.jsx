import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ name, description, city, tags }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90"
          alt="img"
        />
      </div>

      <div className="card__main-description">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="card__sub-description">
        <p>{city}</p>
        <p>{tags.join(',')}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card
