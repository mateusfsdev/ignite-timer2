import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucsses' | 'dark'| 'white'| 'zinc';

interface ButtonConteinarProps {
  variant : ButtonVariant;
}

const ButtonVariant = {
  primary:'purple',
  secondary: 'violet',
  dark: 'royalblue',
  danger: 'red',
  zinc: '#222222',
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
    transition: all 0.2s ease-in-out;
    background-color: ${ props => props.theme.primary };
    color: ${ props => props.theme.white };
    box-shadow: ${ props => props.theme.primary}  3px 4px 4px;
  }

`
;