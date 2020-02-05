const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return action.restaurants
    default:
      return state
  }
}

export default restaurantsReducer
