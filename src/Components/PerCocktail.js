import React from 'react'
import { Link } from 'react-router-dom'

function PerCocktail({ myDrink,
    category,
    alcoholic,
    glass,
    instruction,
    ingredientsArray,
    image}) {
  return (
    <section className="percoctail-container">
        
                <Link to="/" className='back-home'>back home</Link>
                <h1 className="name-title">{myDrink}</h1>
                <div className='internal-container'>
                    <div className = "percocktail-img-container">
                        <img src={image} className='percocktail-img' alt="cocktail-image"/>
                    </div>
                    <div className="percocktail-details">
                        <p className='details-text'><span className='details-title'>name :</span> {myDrink}</p>
                        <p className='details-text'><span className='details-title'>category :</span> {category}</p>
                        <p className='details-text'><span className='details-title'>info :</span> {alcoholic}</p>
                        <p className='details-text'><span className='details-title'>glass :</span> {glass}</p>
                        <p className='details-text'><span className='details-title'>instruction :</span> {instruction}</p>
                        <p className='details-text change-comma'><span className='details-title'>ingredients :</span> {ingredientsArray.map((item, index)=>{
                            return(
                                <span key={index}> {item}</span>
                            )
                        }
                        )}</p>
                    </div>
                </div>

        
    </section>
  )
}

export default PerCocktail