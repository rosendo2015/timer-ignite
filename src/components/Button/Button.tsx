import { ButtonVariant, ContainerButton } from './styles'

interface ButtonProps {
    variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
    return (

        <ContainerButton variant={variant}>Enviar</ContainerButton>
    )
}