import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import SearchQuery from './SearchQuery/SearchQuery'

function SearchForm({isShort}) {
  return (
    <section className='SearchForm' id='SearchForm'>
        <div className="container">
            <SearchQuery></SearchQuery>
            <div className='SearchForm_IsShort'>
                <FilterCheckbox isShort={isShort}></FilterCheckbox>
                <p className='SearchForm_IsShortText'>Короткометражки</p>
            </div>
        </div>
    </section>
  )
}

export default SearchForm