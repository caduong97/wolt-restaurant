/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import store from '../store'
import { dynamicSort } from '../utilities'
import { FETCH_RESTAURANTS, SORT_ASCENDING, SORT_DESCENDING } from './actions'

export const fetchRestaurants = () => {
  return async dispatch => {
    const res = await axios.get(
      'https://raw.githubusercontent.com/caduong97/summer2020/master/restaurants.json',
    )
    dispatch({
      type: FETCH_RESTAURANTS,
      restaurants: res.data.restaurants,
    })
  }
}

export const sortAsc = () => {
  const state = store.getState()
  return dispatch => {
    const newRestaurantData = [...state.restaurants].sort(dynamicSort('name'))
    dispatch({
      type: SORT_ASCENDING,
      restaurants: newRestaurantData,
    })
  }
}

export const sortDesc = () => {
  const state = store.getState()
  return dispatch => {
    const newRestaurantData = [...state.restaurants].sort(dynamicSort('-name'))
    dispatch({
      type: SORT_DESCENDING,
      restaurants: newRestaurantData,
    })
  }
}
