import React from 'react'
import { useGlobalContext } from './Context'
import { useRef, useEffect } from 'react'

function Search() {
    const {isLoading,
        search,
        setSearch,
        cocktail,
        setCocktail} = useGlobalContext()
    const searchValue = useRef('')
const searchChange = () =>{
    setSearch(searchValue.current.value)
}
const handleSubmit = (e) =>{
    e.preventDefault()
}
useEffect (()=>{
    searchValue.current.focus()
},[search])
  return (
    <section className='search-container'>
        <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor="search" className='form-label'>search your favourite cocktail</label>
            <input id='search'
                    type='text'
                    ref={searchValue}
                    onChange={searchChange}
                    className='form-input'
            />
        </form>

    </section>
  )
}

export default Search