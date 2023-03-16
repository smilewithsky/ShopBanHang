import React from 'react';
import { InputWrapper } from './styled'
function input(props){
    const {
        className ,
        value,
        onChange,
        placeholder,
        type
    } = props

    return (
        <>
            <InputWrapper className={className} value={value} onChange={onChange} type={type} placeholder={placeholder}>
                
            </InputWrapper>
        </>            
    )
}

export default input;
