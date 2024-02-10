import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import SearchQuery from './SearchQuery/SearchQuery'

function SearchForm({isShort}) {
  return (
    <div className='SearchForm' id='SearchForm'>
        <form className="container">
            <SearchQuery></SearchQuery>
            <div className='SearchForm_IsShort'>
                <FilterCheckbox isShort={isShort}></FilterCheckbox>
                <p className='SearchForm_IsShortText'>Короткометражки</p>
            </div>
        </form>
    </div>
  )
}

export default SearchForm