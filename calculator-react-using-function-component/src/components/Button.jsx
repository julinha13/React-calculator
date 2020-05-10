import React from 'react'
import './Button.css'

export default props =>

    <button 
    
    onClick={e => props.click && props.click(props.label) }

    className={` Button 
        ${props.operation ? 'operation' : ''}
        ${props.equal ? 'equal' : ''}
        ${props.clear ? 'clear' : ''}
    `}>
        {props.label}
    </button>