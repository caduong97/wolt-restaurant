import {
  FETCH_RESTAURANTS,
  SORT_ASCENDING,
  SORT_DESCENDING,
} from '../actions/actions'

const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.restaurants
    case SORT_ASCENDING:
      return action.restaurants
    case SORT_DESCENDING:
      return action.restaurants
    default:
      return state
  }
}

export default restaurantsReducer
