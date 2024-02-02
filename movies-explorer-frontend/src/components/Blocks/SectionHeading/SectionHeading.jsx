import React from 'react'

function SectionHeading(props) {
  return (
    <h2 className='SectionHeading' id='SectionHeading'>
        {props.children}
    </h2>
  )
}

export default SectionHeading