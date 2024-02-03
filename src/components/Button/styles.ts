import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 8px;
  border: none;

  font-weight: 700;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
