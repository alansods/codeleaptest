import styled, { css } from "styled-components"

interface ButtonProps {
  variant?: 'red' | 'green'
}

export const Button = styled.button<ButtonProps>`
  display: block;
  outline: none;
  border: none;
  padding: 7px 30px;
  background-color: ${props => props.theme["primary"]};
  color: ${props => props.theme["white"]};
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 22px;
  margin-left: auto;

  :hover {
    background-color: ${props => props.theme["primaryHover"]};
    transition: background-color 0.2s ease;
  }

  ${props => props.variant === 'red' && css`
  background-color: ${props => props.theme["red"]}
`}

${props => props.variant === 'green' && css`
  background-color: ${props => props.theme["green"]}
`}

`

