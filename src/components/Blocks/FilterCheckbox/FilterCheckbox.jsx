import React from 'react'

function FilterCheckbox({isShort, handleShortFilms}) {
  return (
    <label className="FilterCheckbox_Switch" id='FilterCheckbox_Switch'>
        <input type="checkbox" onChange={handleShortFilms} checked={isShort ? true : false}/>
        <span className="FilterCheckbox_Slider FilterCheckbox_Round"></span>
    </label>
  )
}

export default FilterCheckbox