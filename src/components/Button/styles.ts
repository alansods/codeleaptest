import styled, { css } from "styled-components"

interface ButtonProps {
  variant?: 'red' | 'green' | 'outline'
  uppercase?: boolean
  alignRight?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: block;
  outline: none;
  border: none;
  width: 120px;
  height: 32px;
  //padding: 6px 30px;
  background-color: ${props => props.theme["primary"]};
  color: ${props => props.theme["white"]};
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 22px;

  user-select: none;
  transition: all 0.2s ease;

  :hover {
    background-color: ${props => props.theme["primaryHover"]};
  }

  :disabled {
    background-color: ${props => props.theme["primaryDisabled"]};
    cursor: not-allowed;
  }

  ${props => props.variant === 'red' && css`
  background-color: ${props => props.theme["red"]};
  :hover {
    background-color: ${props => props.theme["redHover"]}
  }
`}

  ${props => props.variant === 'green' && css`
    background-color: ${props => props.theme["green"]};
    :hover {
    background-color: ${props => props.theme["greenHover"]}
  }
  :disabled {
    background-color: ${props => props.theme["greenDisabled"]};
    cursor: not-allowed;
  }
  `}

  ${props => props.variant === 'outline' && css`
    background-color: ${props => props.theme["white"]};
    color: ${props => props.theme["black"]};
    border: solid 1px ${props => props.theme["gray-300"]};
    :hover {
      background-color: ${props => props.theme["white"]};
      border: solid 1px ${props => props.theme["black"]};
    }
  `}

  ${props => props.uppercase === true && css`
    text-transform: uppercase}
  `}

  ${props => props.alignRight === true && css`
    margin-left: auto;}
  `}

`

