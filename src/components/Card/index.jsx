import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ image, name, description, city, tags }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={name} />
      </div>

      <div className="card__main-description">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="card__sub-description">
        <p className="card__sub-description__location">{city}</p>
        <p className="card__sub-description__tags">{tags.join(',')}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card
