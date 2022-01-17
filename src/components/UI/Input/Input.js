import React from "react";
import classes from './Input.css'

function isValid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const cls = [classes.Input]
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    if (isValid(props)) {
        cls.push(classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {isValid(props) ? <span>{props.errorMessage || 'Введите корректные данные'}</span> : null}

        </div>
    )
}

export default Input