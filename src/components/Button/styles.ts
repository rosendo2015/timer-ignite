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

    border-radius: 4px;
    margin: 5px;
    border: 0;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
`;