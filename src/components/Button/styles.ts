import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ContainerButtonProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',      
}

export const ContainerButton = styled.button<ContainerButtonProps>`

    width: 100px;
    height: 40px;

    ${(props)=>{
        return `
        background-color: ${buttonVariants[props.variant]}
        `
    }}

`