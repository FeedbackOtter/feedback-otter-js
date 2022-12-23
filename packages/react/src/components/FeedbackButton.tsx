import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styled from 'styled-components'

// we should use react spring for animations for others to override
const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0.8rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1px;
  cursor: pointer;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

export interface FeedbackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  modalMarkup?: ReactNode
  placement?: 'right' | 'left'
}

export const FeedbackButton: FC<FeedbackButtonProps> = ({ placement, children, ...rest }) => {
  if (placement === 'right') {
    const RightButton = styled(Button)`
      position: fixed;
      z-index: 9999;
      transform-origin: bottom right;
      transform: rotate(-90deg) translateX(50%);
      right: 0px;
      bottom: 50%;
      :hover {
        transform: rotate(-90deg) translateX(50%) scale(1.1);
      }
    `
    return <RightButton {...rest}>{children}</RightButton>
  }
  if (placement === 'left') {
    const RightButton = styled(Button)`
      position: fixed;
      z-index: 9999;
      transform-origin: bottom left;
      transform: rotate(90deg) translateX(-50%);
      left: 0px;
      bottom: 50%;
      :hover {
        transform: rotate(90deg) translateX(-50%) scale(1.1);
      }
    `
    return <RightButton {...rest}>{children}</RightButton>
  }
  return <Button {...rest}>{children}</Button>
}

export default FeedbackButton
