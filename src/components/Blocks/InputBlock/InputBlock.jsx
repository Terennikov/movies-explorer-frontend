import React, { useEffect, useState } from 'react'

function InputBlock({inputName, inputID, inputType, inputValue, setInputValue, inputAutoComplite, inputError}) {
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        setIsError(inputError)
    }, [inputError]);

    const setInput = (data) => {
        setInputValue(data)
        setIsError(false)
    }
  return (
    <div className='InputBlock' id={inputName}>
        <p className='InputBlock__Name'>{inputName}</p>
    <input placeholder={inputName} id={inputID} className={`InputBlock__Input ${isError ? 'InputBlock__InputError' : ''}`} type={inputType} value={inputValue} onChange={(e) => e.target.value ? setInput(e.target.value) : setInput('')} autoComplete={inputAutoComplite ? inputAutoComplite : null} />
    {inputError ? ( <p className='Login__TextError'>{inputError}</p> ) : null}
    </div>
  )
}

export default InputBlock