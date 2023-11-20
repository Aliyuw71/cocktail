import React from 'react'
import { useContext, useState, useEffect, useCallback } from 'react'
const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppProvider = React.createContext()

const AppParent = ({children})=>{
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState("a")
    const [cocktail, setCocktail] = useState([])

    const fetchData = useCallback(async ()=>{
        try{
            setIsLoading(true)
            const response = await fetch(`${url}${search}`)
            const data = await response.json()
            const {drinks} = data
            if(drinks){
                const newCocktail = drinks.map((drink)=>{
                    const {
                        idDrink,
                        strDrink,
                        strGlass,
                        strAlcoholic,
                        strDrinkThumb
                    } = drink
                    return{
                        id:idDrink,
                        name: strDrink,
                        glass:strGlass,
                        alcoholic: strAlcoholic,
                        image:strDrinkThumb
                    }
                })
                setCocktail(newCocktail)
                setIsLoading(false)
            }else{
                setCocktail([])
                setIsLoading(false)
            }
        }catch(err){
            console.log(err)
        }
    },[search])
    useEffect(()=>{
        fetchData()
    },[search,fetchData])
    return(
        <AppProvider.Provider value = {{
            isLoading,
            search,
            setSearch,
            cocktail,
            setCocktail
        }}>
            {children}
        </AppProvider.Provider>
    )

}
export const useGlobalContext = ()=>{
    return useContext(AppProvider)
}

export {AppParent, AppProvider}
/*import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppParent = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data);
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppParent }*/