import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucsses' | 'dark'| 'white';

interface ButtonConteinarProps {
  variant : ButtonVariant;
}

const ButtonVariant = {
  primary:'purple',
  secondary: 'violet',
  dark: 'royalblue',
  danger: 'red',
  sucsses: 'green',
}

export const ButtonContainer = styled.button<ButtonConteinarProps>`
  width: 108px;
  height: 40px;
  
  border-color: transparent;
  border-radius: 8px;
  margin: 8px;
  font-weight: 600;
  
  background-color: ${ props => props.theme.light };
  color: ${ props => props.theme.white };

  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }

`
;