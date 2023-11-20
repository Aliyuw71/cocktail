import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from './Context'
import CocktailList from './CocktailList'

function Cocktail() {
    const {isLoading,
        search,
        setSearch,
        cocktail,
        setCocktail} = useGlobalContext()
    console.log(cocktail)
    if(isLoading){
        return(
            <Loading />
        )
    }
  return (
    <div className="grid-it">
        {(cocktail.length < 1)?<h1 className="no-cocktail">
                No cocktail matched your search criteria 
            </h1>: cocktail.map((item)=>{
            return (
                <CocktailList key={item.id} {...item} />
            )})}
    </div>
   
  )
}

export default Cocktail