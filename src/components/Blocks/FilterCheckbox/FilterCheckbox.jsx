import React from 'react'

function FilterCheckbox({isShort}) {
  return (
    <label className="FilterCheckbox_Switch" id='FilterCheckbox_Switch'>
        <input type="checkbox" onChange={(e) => isShort(e.target.checked)}/>
        <span className="FilterCheckbox_Slider FilterCheckbox_Round"></span>
    </label>
  )
}

export default FilterCheckbox