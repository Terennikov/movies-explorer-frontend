import React, { useEffect, useState } from 'react'

function SearchQuery() {
  const search= (e) => {
    e.preventDefault()
  }

  const [searchValue, setSearchValue] = useState('')
  const [isDisabledSearchButton, setIsDisabledSearchButton] = useState(true)

  useEffect(() => {
    if (searchValue !== '') {
      setIsDisabledSearchButton(false)
    }
    else {
      setIsDisabledSearchButton(true)
    }
  },[searchValue])

  return (
    <div className='SearchQuery' id='SearchQuery'>
        <div className="SearchQuery__Block">
            <input className='SearchQuery__Input' type="text" placeholder='Фильм' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button type='submit' className='SearchQuery__Button' disabled={isDisabledSearchButton} onClick={(e) => search(e)}>Найти</button>
        </div>

    </div>
  )
}

export default SearchQuery