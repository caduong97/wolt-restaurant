/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchRestaurants = () => {
  return async dispatch => {
    const res = await axios.get(
      'https://raw.githubusercontent.com/caduong97/summer2020/master/restaurants.json',
    )
    // console.log()
    dispatch({
      type: 'FETCH_RESTAURANTS',
      restaurants: res.data.restaurants,
    })
  }
}

export const sortAsc = () => ({
  type: 'SORT_ASCENDING',
})
