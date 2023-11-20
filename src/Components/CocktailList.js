import React from 'react'
import { Link } from 'react-router-dom'

function CocktailList({id,name,glass,alcoholic,image}) {
  return (
    <section className="cocktail-container">
        <div className="cocktail-img-container">
            <img src={image} className='cocktail-img' alt="cocktail-image" />
        </div>
        <div className="cocktail-details">
            <h1 className="name">{name}</h1>
            <p className="glass">{glass}</p>
            <p className="alcoholic">
                {alcoholic}
            </p>
            <Link to={`cocktail/${id}`} className='cocktail-more'>Details</Link>
        </div>
    </section>
  )
}

export default CocktailList