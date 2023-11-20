import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import PerCocktail from '../Components/PerCocktail'
import Loading from '../Components/Loading'
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
function Singlepage() {
  const {id} = useParams()
  const [eachCocktail, setEachCocktail] = useState([])
  const [load, setLoad] = useState(false)
  const EachData = useCallback(async () =>{
    setLoad(true)
    const response = await fetch(`${url}${id}`)
    const data = await response.json()
    const {drinks} = data
    try{
      if(drinks){
        const EachCocktail = drinks.map((drink)=>{
          const {
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strDrinkThumb
          } = drink
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ]
          return {
            myDrink : strDrink,
            category : strCategory,
            alcoholic : strAlcoholic,
            glass : strGlass,
            instruction : strInstructions,
            ingredientsArray : ingredients,
            image : strDrinkThumb
          }
        })
        setEachCocktail(EachCocktail)
        setLoad(false)
      }else{
        setEachCocktail([])
        setLoad(false)
      }
    }catch(err){
      console.log(err)
    }
  },[id])
  useEffect(()=>{
    EachData()
  },[id])
  if(load){
    return(<Loading/>)
  }
  return (
    <section>
      {
        eachCocktail.map((item, index)=>{
          return (
            <PerCocktail key={index} {...item} />
          )
        })
      }
    </section>
  )
}

export default Singlepage