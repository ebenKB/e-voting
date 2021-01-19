import { useEffect, useRef } from 'react';
import Styles from '../Input/input.module.css';

const Input = ({ handleChange, value, canFocus = false, placeholder="" }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (canFocus) {
            inputRef.current.focus()
        } else {
            inputRef.current.blur()
        }
    }, [canFocus])

    return (
        <input 
            type="text"
            placeholder={placeholder} 
            className={Styles.input}
            value={value}
            onChange={handleChange}
            ref={inputRef}
    />
    )
};

export default Input;