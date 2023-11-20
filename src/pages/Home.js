import React from 'react'
import Search from '../Components/Search'
import Cocktail from '../Components/Cocktail'

function Home() {
  return (
    <section className="home-container">
        <Search />
        <Cocktail />
    </section>
  )
}

export default Home