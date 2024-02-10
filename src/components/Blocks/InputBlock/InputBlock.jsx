import React, { useEffect, useState } from 'react'

function InputBlock(
  props
  ) {
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        setIsError(props.inputerror)
    }, [props.inputerror]);

  return (
    <div className='InputBlock' id={props.input_name}>
        <p className='InputBlock__Name'>{props.input_name}</p>
    <input 
     className={`InputBlock__Input ${isError ? 'InputBlock__InputError' : ''}`} 
     placeholder={props.input_name}
     name={props.input_name_eng}
     id={props.input_id}
     autoComplete={props.autoComplete ? props.autoComplete : 'none'}
     onChange={props.onChange}
     type={props.input_type}
     {...props}
     />
    <span className="Login__TextError">{props.input_error}</span>
    </div>
  )
}

export default InputBlock