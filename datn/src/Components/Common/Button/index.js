import React from 'react';
import { ButtonWrapper } from './styled';
const Button = (props) => {
    const {
        name,
        onClick,
        type,
        icon,
        background,
        className,
        children,
        loadding,
        margin,
        font
    } = props;

    return (
        <ButtonWrapper className={className} type={type} onClick={onClick} margin={margin} font={font}>
            {children} {icon}
        </ButtonWrapper>
    )
}

export default Button