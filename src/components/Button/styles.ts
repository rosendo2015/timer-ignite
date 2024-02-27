import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ContainerButtonProps {
  variant: ButtonVariant
}

export const ContainerButton = styled.button<ContainerButtonProps>`
  width: 100px;
  height: 40px;

  border-radius: 4px;
  margin: 5px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['green-300']};
  }
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
