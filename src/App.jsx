import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './App.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './redux/actions/actions'

import Grid from './components/Grid'
import Card from './components/Card'
import SelectMenu from './components/SelectMenu'
import SearchBar from './components/SearchBar'

const App = ({ restaurants, fetchRestaurants }) => {
  // const [restaurants, setRestaurants] = useState([])

  // const fetchData = async () => {
  //   const res = await fetch(
  //     'https://raw.githubusercontent.com/caduong97/summer2020/master/restaurants.json',
  //   )
  //   const data = await res.json()
  //   setRestaurants(data.restaurants)
  // }

  useEffect(() => {
    fetchRestaurants()
    console.log('heheh')
    // eslint-disable-next-line
  }, [])

  return (
    <div className="app">
      <h1 className="app__title">restaurant discovery</h1>
      <div className="app__filter">
        <SearchBar />
        <SelectMenu />
      </div>

      <div>
        <Grid colNum={3}>
          {restaurants.map(item => (
            <Card
              // key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              city={item.city}
              tags={item.tags}
            />
          ))}
        </Grid>
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

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchRestaurants: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
