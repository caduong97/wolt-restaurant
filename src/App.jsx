import React from 'react'
import './App.scss'

import Grid from './components/Grid'
import Card from './components/Card'
import SelectMenu from './components/SelectMenu'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="app">
      <div className="app__filter">
        <SearchBar />
        <SelectMenu />
      </div>

      <div>
        <Grid colNum={3}>
          <Card
            name="Social Burgerjoint Citycenter"
            description="Asenneburgeri"
            city="Helsinki"
            tags={['hamburger', 'fries']}
          />
          <Card
            name="Social Burgerjoint Citycenter"
            description="Asenneburgeri"
            city="Helsinki"
            tags={['hamburger', 'fries']}
          />
          <Card
            name="Social Burgerjoint Citycenter"
            description="Asenneburgeri"
            city="Helsinki"
            tags={['hamburger', 'fries']}
          />
          <Card
            name="Social Burgerjoint Citycenter"
            description="Asenneburgeri"
            city="Helsinki"
            tags={['hamburger', 'fries']}
          />
          <Card
            name="Social Burgerjoint Citycenter"
            description="Asenneburgeri"
            city="Helsinki"
            tags={['hamburger', 'fries']}
          />
          <Card
            name="Social Burgerjoint Citycenter"
            description="Asenneburgeri"
            city="Helsinki"
            tags={['hamburger', 'fries']}
          />
        </Grid>
      </div>
    </div>
  )
}

export default App
