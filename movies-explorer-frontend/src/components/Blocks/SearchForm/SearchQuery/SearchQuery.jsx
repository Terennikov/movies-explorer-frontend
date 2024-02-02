import React from 'react'

function SearchQuery() {
  return (
    <div className='SearchQuery' id='SearchQuery'>
        <div className="SearchQuery__Block">
            <input className='SearchQuery__Input' type="text" placeholder='Фильм'/>
            <button className='SearchQuery__Button'>Найти</button>
        </div>

    </div>
  )
}

export default SearchQuery