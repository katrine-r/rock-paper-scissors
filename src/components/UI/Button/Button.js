import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]
    return (
        <button 
            onClick={props.onClick}
            id={props.id}
            type={props.type}
            className={cls.join(" ")} 
            disabled={props.disabled}
        >
            { props.children }
        </button>
    )
}

export default Button