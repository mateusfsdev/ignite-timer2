import styled, { css }from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucsses' | 'dark';

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
    color: white;
    font-weight: 600;


   ${props => {
    return css`
      background-color: ${ButtonVariant[props.variant]}
    `
   }}

`
;