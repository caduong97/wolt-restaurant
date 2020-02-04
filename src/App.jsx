import React, { useState, useEffect } from 'react'
import './App.scss'

import Grid from './components/Grid'
import Card from './components/Card'
import SelectMenu from './components/SelectMenu'
import SearchBar from './components/SearchBar'

function App() {
  const [restaurants, setRestaurants] = useState([])

  const fetchData = async () => {
    const res = await fetch(
      'https://raw.githubusercontent.com/caduong97/summer2020/master/restaurants.json',
    )
    const data = await res.json()
    setRestaurants(data.restaurants)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
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

export default App
